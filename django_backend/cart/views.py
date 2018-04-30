import braintree
from django.conf import settings
from django.contrib import messages
from django.http import Http404, JsonResponse
from django.shortcuts import redirect
from django.views.generic.base import View
from order.mixins import CartOrderMixin
from order.models import Order, UserAddress, UserCheckout
from order.serializers import FinalizedOrderSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
import requests
import json
from django.contrib.auth import get_user_model
User = get_user_model()
from .mixins import CartTokenMixin, CartUpdateAPIMixin, TokenMixin
from .models import Cart
from .serializers import CartItemSerializer, CheckoutSerializer


class CheckoutFinalizeAPIView(TokenMixin, APIView):
    def get(self, request, format=None):
        response = {}
        order_token = request.GET.get('order_token')
        if order_token:
            checkout_id = self.parse_token(order_token).get("user_checkout_id")
            if checkout_id:
                checkout = UserCheckout.objects.get(id=checkout_id)
                client_token = checkout.get_client_token()
                response["client_token"] = client_token
                return Response(response)
        else:
            response["message"] = "This method is not allowed"
            return Response(response, status=status.HTTP_405_METHOD_NOT_ALLOWED)

    def post(self, request, format=None):
        data = request.data
        response = {}
        serializer = FinalizedOrderSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            request_data = serializer.data
            order_id = request_data.get("order_id")
            order = Order.objects.get(id=order_id)
            if not order.is_complete:
                order_total = order.order_total
                # nonce = request_data.get("payment_method_nonce")
                # if nonce:
                #     result = braintree.Transaction.sale({
                #         "amount": order_total,
                #         "payment_method_nonce": nonce,
                #         "billing": {
                #             "postal_code": "%s" % (order.billing_address.zipcode),
                #
                #         },
                #         "options": {
                #             "submit_for_settlement": True
                #         }
                #     })
                #     success = result.is_success
                #     if success:
                    # result.transaction.id to order
                order.mark_completed()
                # order.mark_completed(order_id="abc12344423")
                order.cart.is_complete()
                response["message"] = "Your order has been completed."
                response["final_order_id"] = order.order_id
                response["success"] = True
                    # else:
                    #     # messages.success(request, "There was a problem with your order.")
                    #     error_message = result.message
                    #     # error_message = "Error"
                    #     response["message"] = error_message
                    #     response["success"] = False
            else:
                response["message"] = "Ordered has already been completed."
                response["success"] = False

        return Response(response)


class CheckoutAPIView(TokenMixin, APIView):

    def post(self, request, format=None):
        data = request.data
        serializer = CheckoutSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            data = serializer.data
            user_checkout_id = data.get("user_checkout_id")
            cart_id = data.get("cart_id")
            billing_address = data.get("billing_address")
            shipping_address = data.get("shipping_address")
            user_checkout = UserCheckout.objects.get(id=user_checkout_id)
            cart_obj = Cart.objects.get(id=cart_id)
            s_a = UserAddress.objects.get(id=shipping_address)
            b_a = UserAddress.objects.get(id=billing_address)
            order, created = Order.objects.get_or_create(cart=cart_obj, user=user_checkout)
            if not order.is_complete:
                order.shipping_address = s_a
                order.billing_address = b_a
                order.save()
                order_data = {
                    "order_id": order.id,
                    "user_checkout_id": user_checkout_id
                }
                order_token = self.create_token(order_data)
        response = {
            "order_token": order_token
        }
        return Response(response)


class CartAPIView(CartTokenMixin, CartUpdateAPIMixin, APIView):
    # authentication_classes = [SessionAuthentication]
    # permission_classes = [IsAuthenticated]
    token_param = "token"
    cart = None

    def get_cart(self):
        data, cart_obj, response_status = self.get_cart_from_token()
        if cart_obj == None or not cart_obj.active:
            cart = Cart()
            cart.tax_percentage = 0.075
            token = self.request.GET.get('cart_user_token')
            if token:
                user_id = requests.get('http://localhost:8000/rest-auth/user/', headers={'authorization': 'Token ' + token})
                user_id = json.loads(user_id.text)
                user_record = User.objects.filter(pk=user_id.get('pk'))
                if user_record:
                    cart.user = user_record[0]
            cart.save()
            data = {
                "cart_id": str(cart.id)
            }
            self.create_token(data)
            cart_obj = cart

        return cart_obj

    def get(self, request, format=None):
        cart = self.get_cart()
        self.cart = cart
        self.update_cart()
        # token = self.create_token(cart.id)
        items = CartItemSerializer(cart.cartitem_set.all(), many=True)

        cart.items.all()
        data = {
            "token": self.token,
            "cart": cart.id,
            "total": cart.total,
            "subtotal": cart.subtotal,
            "tax_total": cart.tax_total,
            "count": cart.items.count(),
            "items": items.data,
        }
        return Response(data)


if settings.DEBUG:
    braintree.Configuration.configure(braintree.Environment.Sandbox,
                                      merchant_id=settings.BRAINTREE_MERCHANT_ID,
                                      public_key=settings.BRAINTREE_PUBLIC,
                                      private_key=settings.BRAINTREE_PRIVATE)


class ItemCountView(View):
    def get(self, request, *args, **kwargs):
        if request.is_ajax():
            cart_id = self.request.session.get("cart_id")
            if cart_id == None:
                count = 0
            else:
                cart = Cart.objects.get(id=cart_id)
                count = cart.items.count()
            request.session["cart_item_count"] = count
            return JsonResponse({"count": count})
        else:
            raise Http404


class CheckoutFinalView(CartOrderMixin, View):
    def post(self, request, *args, **kwargs):
        order = self.get_order()
        order_total = order.order_total
        nonce = request.POST.get("payment_method_nonce")
        if nonce:
            result = braintree.Transaction.sale({
                "amount": order_total,
                "payment_method_nonce": nonce,
                "billing": {
                    "postal_code": "%s" % (order.billing_address.zipcode),

                },
                "options": {
                    "submit_for_settlement": True
                }
            })
            if result.is_success:
                # result.transaction.id to order
                order.mark_completed(order_id=result.transaction.id)
                messages.success(request, "Thank you for your order.")
                del request.session["cart_id"]
                del request.session["order_id"]
            else:
                # messages.success(request, "There was a problem with your order.")
                messages.success(request, "%s" % (result.message))
                return redirect("checkout")

        return redirect("order_detail", pk=order.pk)

    def get(self, request, *args, **kwargs):
        return redirect("checkout")

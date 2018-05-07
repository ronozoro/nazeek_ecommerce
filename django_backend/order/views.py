from cart.mixins import TokenMixin
from django.contrib.auth import get_user_model
from django.http import Http404
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from rest_framework.authentication import SessionAuthentication
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from .mixins import LoginRequiredMixin
from .models import Order, UserAddress, UserCheckout
from .permissions import IsOwnerAndAuth
from .serializers import OrderDetailSerializer, UserAddressSerializer,UserDomain
from django.contrib.auth import login
import requests
import json
# Create your views here.

User = get_user_model()


class OrderRetrieveAPIView(RetrieveAPIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsOwnerAndAuth]
    model = Order
    queryset = Order.objects.all()
    serializer_class = OrderDetailSerializer

    def get_queryset(self, *args, **kwargs):
        return Order.objects.filter(user__user=self.request.user)


class OrderListAPIView(ListAPIView):
    authentication_classes = [SessionAuthentication]
    permission_classes = [IsOwnerAndAuth]
    model = Order
    queryset = Order.objects.all()
    serializer_class = OrderDetailSerializer

    def get_queryset(self, *args, **kwargs):
        return Order.objects.filter(user__user=self.request.user)


class UserAddressCreateAPIView(CreateAPIView):
    model = UserAddress
    serializer_class = UserAddressSerializer


class UserGetID(TokenMixin, ListAPIView):
    model=User
    queryset = User.objects.all()
    serializer_class = UserDomain

    def get_queryset(self, *args, **kwargs):
        user_checkout_token = self.request.GET.get("checkout_token")
        print(user_checkout_token)
        user_checkout_data = self.parse_token(user_checkout_token)
        user_checkout_id = user_checkout_data.get("user_checkout_id")
        if self.request.user.is_authenticated():
            return self.request.user.pk
        elif user_checkout_id:
            return User.objects.filter(id=int(user_checkout_id))
        else:
            return []

class UserAddressListAPIView(TokenMixin, ListAPIView):
    model = UserAddress
    queryset = UserAddress.objects.all()
    serializer_class = UserAddressSerializer

    def get_queryset(self, *args, **kwargs):
        user_checkout_token = self.request.GET.get("checkout_token")
        user_checkout_data = self.parse_token(user_checkout_token)
        user_checkout_id = user_checkout_data.get("user_checkout_id")
        if self.request.user.is_authenticated():
            return UserAddress.objects.filter(user__user=self.request.user)
        elif user_checkout_id:
            return UserAddress.objects.filter(user__id=int(user_checkout_id))
        else:
            return []


class UserCheckoutMixin(TokenMixin, object):
    def user_failure(self, message=None):
        data = {
            "message": "There was an error. Please try again.",
            "success": False
        }
        if message:
            data["message"] = message
        return data

    def get_checkout_data(self, user=None, email=None):
        if email and not user:
            user_exists = User.objects.filter(email=email).count()
            if user_exists != 0:

                return self.user_failure(message="This user already exists, please login.")

        data = {}
        user_checkout = None
        if user and not email:
            if user.is_authenticated():
                user_checkout = UserCheckout.objects.get_or_create(user=user, email=user.email)[
                    0]  # (instance, created)

        elif email:
            # try:
            user_checkout = UserCheckout.objects.get_or_create(email=email)[0]
            if user:
                user_checkout.user = user
                user_checkout.save()
            # except:
            #     pass  # (instance, created)
        else:
            pass

        if user_checkout:
            data["success"] = True
            # data["braintree_id"] = user_checkout.get_braintree_id
            data["user_checkout_id"] = user_checkout.id
            data["user_checkout_token"] = self.create_token(data)

            # del data["braintree_id"]
            del data["user_checkout_id"]
            # data["braintree_client_token"] = user_checkout.get_client_token()

        return data


class UserCheckoutAPI(UserCheckoutMixin, APIView):
    permission_classes = [AllowAny]

    def get(self, request, format=None):
        data = self.get_checkout_data(user=request.user)
        return Response(data)

    def post(self, request, format=None):
        data = {}
        token = request.data.get("token")
        email = request.data.get("email")
        if token:
            user_id = requests.get('http://localhost:8000/rest-auth/user/', headers={'authorization': 'Token ' + token})
            user_id = json.loads(user_id.text)
            user_record = User.objects.filter(pk=user_id.get('pk'))
        else:
            user_record=False
        if user_record:
            data = self.get_checkout_data(user=user_record[0])
        elif email and not token:
            data = self.get_checkout_data(email=email)
        else:
            data = self.user_failure(message="Make sure you are authenticated or using a valid email.")
        return Response(data)


class OrderDetail(DetailView):
    model = Order

    def dispatch(self, request, *args, **kwargs):
        try:
            user_check_id = self.request.session.get("user_checkout_id")
            user_checkout = UserCheckout.objects.get(id=user_check_id)
        except UserCheckout.DoesNotExist:
            user_checkout = UserCheckout.objects.get(user=request.user)
        except:
            user_checkout = None

        obj = self.get_object()
        if obj.user == user_checkout and user_checkout is not None:
            return super(OrderDetail, self).dispatch(request, *args, **kwargs)
        else:
            raise Http404


class OrderList(LoginRequiredMixin, ListView):
    queryset = Order.objects.all()

    def get_queryset(self):
        user_check_id = self.request.user.id
        user_checkout = UserCheckout.objects.get(id=user_check_id)
        return super(OrderList, self).get_queryset().filter(user=user_checkout)

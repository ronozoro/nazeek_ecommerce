from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework import status
from cart.mixins import TokenMixin
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import get_user_model
import requests
import json
from django.http import Http404

from .serializers import WishlistSerializer, WishlistItemSerializer
from .models import Wishlist, WishlistItem

User = get_user_model()
class WishlistList(ListCreateAPIView):
    serializer_class = WishlistSerializer


    #GET OR CREATE A WISH LIST FOR AN AUTHENTICATED USER
    def list(self, request, *args, **kwargs):
        try:
            token=request.GET.get('token')
            user_id = requests.get('http://localhost:8000/rest-auth/user/', headers={'authorization': 'Token ' + token})
            user_id = json.loads(user_id.text)
            user_record=User.objects.get(pk=user_id.get('pk'))
            queryset = Wishlist.objects.prefetch_related(
                'wishlist_items__product'
            ).get(user=user_record)
            serializer = self.get_serializer(queryset)
            if len(serializer.data.get('wishlist_items', '')) == 0:
                return Response({"message": "Your Wish List is empty.",
                    "wishlist_items": []
                    })
            return Response(serializer.data)
        except Wishlist.DoesNotExist:
            token = request.GET.get('token')
            user_id = requests.get('http://localhost:8000/rest-auth/user/', headers={'authorization': 'Token ' + token})
            user_id = json.loads(user_id.text)
            user_record = User.objects.get(pk=user_id.get('pk'))
            serializer = self.get_serializer(data={
                'user': user_record}
            )
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response({'message': "Your Wish List is empty.",
                "wishlist_items": []}, status=status.HTTP_201_CREATED,
                headers=headers)


class WishlistItemList(ListCreateAPIView):
    serializer_class = WishlistItemSerializer
    queryset = WishlistItem.objects.all()


    def list(self, request, *args, **kwargs):
        token = request.GET.get('token')
        user_id = requests.get('http://localhost:8000/rest-auth/user/', headers={'authorization': 'Token ' + token})
        user_id = json.loads(user_id.text)
        user_record = User.objects.get(pk=user_id.get('pk'))
        queryset = WishlistItem.objects.select_related(
            'wishlist', 'product'
        ).filter(
            wishlist__user=user_record
        )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        #if the wishlist for that user is already created
        try:
            token = request.GET.get('token')
            user_id = requests.get('http://localhost:8000/rest-auth/user/', headers={'authorization': 'Token ' + token})
            user_id = json.loads(user_id.text)
            user_record = User.objects.get(pk=user_id.get('pk'))
            queryset_wishlist = Wishlist.objects.get(user=user_record)
            #if the wishlist item exists in the USER's wishlist
            #just increment the quantity
            if queryset_wishlist.wishlist_items.filter(
                product=request.data.get('product')
            ).exists():
                existant_item = WishlistItem.objects.filter(
                    wishlist = queryset_wishlist,
                    product=request.data.get('product')
                ).first()
                serializer = self.get_serializer(existant_item,
                    data={"quantity": existant_item.quantity + 1}, partial=True
                )
                serializer.is_valid(raise_exception=True)
                serializer.save()
                if getattr(existant_item, '_prefetched_objects_cache', None):
                    # If 'prefetch_related' has been applied to a queryset, we need to
                    # forcibly invalidate the prefetch cache on the existant_item.
                    existant_item._prefetched_objects_cache = {}
                return Response(serializer.data)
            #else
            serializer = self.get_serializer(data={**request.data,
                "wishlist": queryset_wishlist.id })
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data,
                status=status.HTTP_201_CREATED, headers=headers)
        #if the wishlist for that user does not exist
        #create it first and then add the item to his wishlist
        except Wishlist.DoesNotExist:
            token = request.GET.get('token')
            user_id = requests.get('http://localhost:8000/rest-auth/user/', headers={'authorization': 'Token ' + token})
            user_id = json.loads(user_id.text)
            user_record = User.objects.get(pk=user_id.get('pk'))
            serializer_wishlist = WishlistSerializer(
                data={"user": user_record})
            serializer_wishlist.is_valid(raise_exception=True)
            serializer_wishlist.save()
            serializer = self.get_serializer(data={**request.data,
                "wishlist": serializer_wishlist.data['id']})
            serializer.is_valid(raise_exception=True)
            serializer.save()
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED,
            headers=headers)


class WishlistItemDetail(RetrieveUpdateDestroyAPIView,TokenMixin):
    queryset = WishlistItem.objects.all()
    serializer_class = WishlistItemSerializer
    lookup_url_kwarg = 'pk'


    def get_object(self):
        try:
            return WishlistItem.objects.get(
                wishlist = self.kwargs['wishlist_pk'],
                pk = self.kwargs['pk']
            )
        except WishlistItem.DoesNotExist:
            raise Http404

# Only fetch the count of wishlist_items in the user's wishlist -
# so they're dynamically displayed in the nav bar
@api_view(['GET'])

def WishlistItemCount(request):
    if request.method == 'GET' and request.GET.get('token'):
        token = request.GET.get('token')

        user_id = requests.get('http://localhost:8000/rest-auth/user/',headers={'authorization': 'Token ' + token})
        user_id=json.loads(user_id.text)
        try:
            wishlist_item_count = WishlistItem.objects.filter(
                wishlist__user=User.objects.get(pk=user_id.get('pk'))
            ).count()
        except:
            raise Http404

        return Response(
            {"item_count": int(wishlist_item_count)}
        )
    else:
        raise Http404

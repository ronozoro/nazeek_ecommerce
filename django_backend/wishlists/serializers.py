from rest_framework import serializers
from .models import Wishlist, WishlistItem

from django.conf import settings

#For each
class WishlistItemList(serializers.RelatedField):
    def to_representation(self, value):

        return {
            "id": value.id,
            "wishlist": value.wishlist.id,
            "product": value.product.title,
            "product_id": value.product.id,
            "price": value.product.sale_price,
            "quantity": value.quantity
        }


class WishlistSerializer(serializers.ModelSerializer):
    wishlist_items = WishlistItemList(many=True, read_only=True)
    class Meta:
        model = Wishlist
        fields = ('id', 'user', 'wishlist_items')

class WishlistItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishlistItem
        fields = ('id', 'wishlist', 'product',
            'quantity', 'date_added'
        )

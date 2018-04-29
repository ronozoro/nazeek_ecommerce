from django.db import models
from django.conf import settings

from product.models import Variation

class Wishlist(models.Model):
    """
    Represents a user's wish lists of products.
    Only authenticated users can have wishlists.
    A user can move items from his wish list to his cart in
    order to check out with those items.
    """
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE, related_name='wishlists')

    class Meta:
        db_table = 'wishlists'

    def __str__(self):
        return self.user.username

class WishlistItem(models.Model):
    wishlist = models.ForeignKey(Wishlist,
        on_delete=models.CASCADE, related_name='wishlist_items')
    product = models.ForeignKey(Variation,
        on_delete=models.CASCADE, related_name='wishlist_items')
    quantity = models.PositiveIntegerField(default=1)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'wishlist_items'

    def __str__(self):
        return self.product.title

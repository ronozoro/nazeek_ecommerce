from django.db import models

from product.models import Product
from django.conf import settings

REVIEW_VALUE_CHOICES = (
    (1,1),
    (2,2),
    (3,3),
    (4,4),
    (5,5)
)

class Review(models.Model):
    product = models.ForeignKey(Product,
        on_delete = models.CASCADE, related_name='reviews')
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
        on_delete = models.PROTECT, related_name='reviews')
    value = models.IntegerField(choices=REVIEW_VALUE_CHOICES,
        blank=True, null=True)
    comment_text = models.CharField(max_length=255)
    creation_date = models.DateTimeField(auto_now_add=True)
    is_approved = models.BooleanField(default=True,
        help_text=('Can hide a review if it\'s not appropriate.'))

    def __str__(self):
        return self.product.title

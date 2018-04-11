from django.contrib import admin

from .models import Order, UserAddress, UserCheckout

# Register your models here.


admin.site.register(UserCheckout)

admin.site.register(UserAddress)

admin.site.register(Order)

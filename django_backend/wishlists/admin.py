from django.contrib import admin

from .models import Wishlist, WishlistItem


class WishlistItemInline(admin.StackedInline):
    model = WishlistItem
    #display 0 extra forms, display just the wishlish items the user added
    extra = 0


@admin.register(Wishlist)
class WishlistAdmin(admin.ModelAdmin):
    inlines = [WishlistItemInline,]
    list_display = ['user']
    search_fields = ['user__username', 'user__email']
    list_select_related = ('user', )

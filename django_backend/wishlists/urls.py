from django.conf.urls import url
from .views import (WishlistList, WishlistItemList,
    WishlistItemDetail, WishlistItemCount)

from django.views.decorators.csrf import ensure_csrf_cookie

urlpatterns = [
    url(r"^wishlist/$", ensure_csrf_cookie(WishlistList.as_view()),
        name='wishlist-list'),

    url(r"^wishlistitems/$", ensure_csrf_cookie(WishlistItemList.as_view()),
        name='wishlist-item-list'),

    url(r'^wishlist/(?P<wishlist_pk>[0-9]+)/wishlistitems/(?P<pk>[0-9]+)/$',
        ensure_csrf_cookie(WishlistItemDetail.as_view()),
        name='wishlist-item-detail'),

    url(r'^wishlistitemcount/$',
        ensure_csrf_cookie(WishlistItemCount),
        name='wishlist-item-count'),
]

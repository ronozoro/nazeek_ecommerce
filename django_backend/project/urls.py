from cart.views import (
    CartAPIView,
    CheckoutAPIView,
    CheckoutFinalizeAPIView, CheckoutFinalView, ItemCountView
)
from django.conf.urls import include, url
from django.contrib import admin
from order.views import (OrderListAPIView, OrderRetrieveAPIView, UserAddressCreateAPIView, UserAddressListAPIView,
                         UserCheckoutAPI, UserGetID)
from product.views import (APIHomeView, BrandListAPIView, CategoryListAPIView, CategoryRetrieveAPIView,
                           ProductListAPIView, ProductRetrieveAPIView, SellerListAPIView)
from rest_framework import routers
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token
from user_profile.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'user', UserViewSet, )

urlpatterns = [

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include('wishlists.urls')),
    url(r'^api/newsletter/', include('newsletter.api.urls')),
    url(r'^', include('django.contrib.auth.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^account/', include('allauth.urls')),
    url(r'^api/$', APIHomeView.as_view(), name='home_api'),
    url(r'^api/products/$', ProductListAPIView.as_view(), name='products_api'),
    url(r'^api/sellers/$', SellerListAPIView.as_view(), name='sellers_api'),
    url(r'^api/brands/$', BrandListAPIView.as_view(), name='brands_api'),
    url(r'^api/categories/$', CategoryListAPIView.as_view(), name='categories_api'),
    url(r'^api/categories/(?P<pk>\d+)/$', CategoryRetrieveAPIView.as_view(), name='category_detail_api'),
    url(r'^api/products/(?P<pk>\d+)/$', ProductRetrieveAPIView.as_view(), name='products_detail_api'),
    url(r'^api/orders/$', OrderListAPIView.as_view(), name='orders_api'),
    url(r'^api/orders/(?P<pk>\d+)/$', OrderRetrieveAPIView.as_view(), name='order_detail_api'),
    url(r'^api/cart/$', CartAPIView.as_view(), name='cart_api'),
    url(r'^cart/count/$', ItemCountView.as_view(), name='item_count'),
    url(r'^checkout/final/$', CheckoutFinalView.as_view(), name='checkout_final'),
    url(r'^api/checkout/$', CheckoutAPIView.as_view(), name='checkout_api'),
    url(r'^api/checkout/finalize/$', CheckoutFinalizeAPIView.as_view(), name='checkout_finalize_api'),
    url(r'^api/auth/token/$', obtain_jwt_token, name='auth_login_api'),
    url(r'^api/auth/token/refresh/$', refresh_jwt_token, name='refresh_token_api'),
    url(r'^api/user/address/$', UserAddressListAPIView.as_view(), name='user_address_list_api'),
    url(r'^api/user/get/$', UserGetID.as_view(), name='user_token_list_api'),
    url(r'^api/user/address/create/$', UserAddressCreateAPIView.as_view(), name='user_address_create_api'),
    url(r'^api/user/checkout/$', UserCheckoutAPI.as_view(), name='user_checkout_api'),
    url(r'^api/categories/$', CategoryListAPIView.as_view(), name='categories_api'),
    url(r'^api/categories/(?P<pk>\d+)/$', CategoryRetrieveAPIView.as_view(), name='category_detail_api'),
    url(r'^api/orders/$', OrderListAPIView.as_view(), name='orders_api'),
    url(r'^api/orders/(?P<pk>\d+)/$', OrderRetrieveAPIView.as_view(), name='order_detail_api'),

]

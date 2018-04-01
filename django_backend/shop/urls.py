# coding=utf-8
from django.conf.urls import include, url
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'products', views.ProductViewSet)
router.register(r'categories', views.CategoryViewSet)
router.register(r'product-images', views.ProductImagesViewSet)
router.register(r'product-brands', views.ProductBrandViewSet)
urlpatterns = [
    url(r'^', include(router.urls),name='shop'),
]

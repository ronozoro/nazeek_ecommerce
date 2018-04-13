from rest_framework import filters, generics
from rest_framework.response import Response
from rest_framework.reverse import reverse as api_reverse
from rest_framework.views import APIView

# Create your views here.
from .models import Category, Product,ProductSeller,ProductBrand
from .pagination import CategoryPagination
from .serializers import (CategorySerializer, ProductDetailSerializer, ProductSerializer,BrandSerializer,SellerSerializer)

class APIHomeView(APIView):
    def get(self, request, format=None):
        data = {

            "address": {
                "url": api_reverse("user_address_list_api", request=request),
                "create": api_reverse("user_address_create_api", request=request),
            },
            "checkout": {
                "cart": api_reverse("cart_api", request=request),
                "checkout": api_reverse("checkout_api", request=request),
                "finalize": api_reverse("checkout_finalize_api", request=request),
            },
            "products": {
                "count": Product.objects.all().count(),
                "url": api_reverse("products_api", request=request)
            },
            "sellers": {
                "count": ProductSeller.objects.all().count(),
                "url": api_reverse("sellers_api", request=request)
            },
            "brands": {
                "count": ProductBrand.objects.all().count(),
                "url": api_reverse("brands_api", request=request)
            },
            "categories": {
                "count": Category.objects.all().count(),
                "url": api_reverse("categories_api", request=request)
            },
            "orders": {
                "url": api_reverse("orders_api", request=request),
            }
        }
        return Response(data)


class CategoryListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = CategoryPagination


class CategoryRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class ProductListAPIView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    search_fields = ["title", "description"]
    ordering_fields = ["title", "id"]



class ProductRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer

class SellerListAPIView(generics.ListAPIView):
    queryset = ProductSeller.objects.all()
    serializer_class = SellerSerializer
    filter_backends = [
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    search_fields = ["title"]
    ordering_fields = ["title", "id"]
class BrandListAPIView(generics.ListAPIView):
    queryset = ProductBrand.objects.all()
    serializer_class = BrandSerializer
    filter_backends = [
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    search_fields = ["title"]
    ordering_fields = ["title", "id"]

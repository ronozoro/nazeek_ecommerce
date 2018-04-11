import base64

from django.core.files import File
from rest_framework import serializers

from .models import Category, Product, ProductImage, Variation


class VariationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Variation
        fields = [
            "id",
            "title",
            "price",
            "color",
        ]


class ProductImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        f = open(obj.image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data

    class Meta:
        model = ProductImage
        fields = [
            "product",
            "image",
        ]


class ProductDetailUpdateSerializer(serializers.ModelSerializer):
    variation_set = VariationSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "id",
            "title",
            "description",
            "price",
            "image",
            "variation_set",
        ]

    def get_image(self, obj):
        f = open(obj.productimage_set.first().image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data

    def create(self, validated_data):
        title = validated_data["title"]
        Product.objects.get(title=title)
        product = Product.objects.create(**validated_data)
        return product

    def update(self, instance, validated_data):
        instance.title = validated_data["title"]
        instance.save()
        return instance


class ProductDetailSerializer(serializers.ModelSerializer):
    variation_set = VariationSerializer(many=True, read_only=True)
    image = serializers.SerializerMethodField()
    productimage_set = ProductImageSerializer(many=True)

    class Meta:
        model = Product
        fields = [
            "id",
            "title",
            "description",
            "price",
            "brand_id",
            "seller_id",
            "image",
            "variation_set",
            "productimage_set"
        ]

    def get_image(self, obj):
        f = open(obj.productimage_set.first().image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data


class ProductSerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='products_detail_api')
    variation_set = VariationSerializer(many=True)
    productimage_set = ProductImageSerializer(many=True)
    image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            "url",
            "id",
            "title",
            "brand_id",
            "seller_id",
            "image",
            "variation_set",
            "productimage_set"
        ]

    def get_image(self, obj):
        f = open(obj.productimage_set.first().image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data


class CategorySerializer(serializers.ModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='category_detail_api')
    product_set = ProductSerializer(many=True)

    class Meta:
        model = Category
        fields = [
            "url",
            "id",
            "title",
            "description",
            "product_set",
        ]

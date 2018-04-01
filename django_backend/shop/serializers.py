# coding=utf-8

import base64

from django.core.files import File
from rest_framework import serializers

from .models import Category, Product, ProductBrand, ProductImages


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ('name', 'parent_id', 'slug')


CategorySerializer()


class ProductBrandSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = ProductBrand
        fields = ('name', 'slug',)


class ProductImagesSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = ProductImages
        fields = ('product', 'image', 'color')

    #
    def get_image(self, obj):
        f = open(obj.image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data


ProductImagesSerializer()


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.SerializerMethodField()
    product_images = serializers.SerializerMethodField('get_products_image')

    def get_products_image(self, obj):
        list_of_objects = []
        for record in obj.product_images.all():
            list_of_objects.append({'color':record.color,'image':record.get_base64_image(record.image),'record':record.product.id})
        return list_of_objects

    def get_image(self, obj):
        f = open(obj.image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data

    class Meta:
        model = Product
        fields = (
            'category', 'product_images', 'image', 'brand_id', 'item_sequence_id', 'name', 'slug', 'description',
            'details', 'reviews',
            'price',
            'stock', 'weight', 'height', 'width', 'available', 'created', 'updated', 'similar_products')


ProductSerializer()

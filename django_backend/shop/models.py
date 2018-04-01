# -*- coding: utf-8 -*-
import random
import string
import base64

from django.core.files import File
from colorful.fields import RGBColorField
from django.core.urlresolvers import reverse
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    parent_id = models.ForeignKey('self', verbose_name='Parent Category', blank=True, null=True)
    slug = models.SlugField(max_length=200, db_index=True, unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('shop:product_list_by_category', args=[self.slug])


class ProductBrand(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)

    def __str__(self):
        return self.name


def default_sequence():
    return str(''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(5)))


class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products')
    brand_id = models.ForeignKey(ProductBrand, related_name='products')
    item_sequence_id = models.CharField(verbose_name="Product Sequence", default=default_sequence, max_length=200)
    name = models.CharField(max_length=200, db_index=True)
    slug = models.SlugField(max_length=200, db_index=True)
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True)
    description = models.TextField(blank=True)
    details = models.TextField(blank=True)
    reviews = models.TextField(blank=True)
    price = models.DecimalField(decimal_places=2, max_digits=10)
    stock = models.PositiveIntegerField()
    weight = models.FloatField(verbose_name='Weight')
    height = models.FloatField(verbose_name='height')
    width = models.FloatField(verbose_name='Width')
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    similar_products = models.ManyToManyField("self", blank=True)

    class Meta:
        ordering = ('-created',)
        index_together = (('id', 'slug'),)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('shop:product_detail', args=[self.id, self.slug])


class ProductImages(models.Model):
    product = models.ForeignKey(Product, related_name='product_images')
    image = models.ImageField(upload_to='products/%Y/%m/%d', blank=True)
    color = RGBColorField()

    def get_base64_image(self, image):
        f = open(image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data

    def __str__(self):
        return self.color

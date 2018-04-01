# -*- coding: utf-8 -*-
from django.contrib import admin

from .models import Category, Product, ProductImages, ProductBrand


class CategoryAdmin(admin.ModelAdmin):
    pass


class ProductAdmin(admin.ModelAdmin):
    pass


class ProductImagesAdmin(admin.ModelAdmin):
    pass

class ProductBrandAdmin(admin.ModelAdmin):
    pass


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImages, ProductImagesAdmin)
admin.site.register(ProductBrand, ProductBrandAdmin)

from django.contrib import admin

from .models import Category, Product, ProductImage, Variation, ProductBrand, ProductSeller


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 0
    max_num = 10


class VariationInline(admin.TabularInline):
    model = Variation
    extra = 0
    max_num = 10


class ProductAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'price']
    inlines = [
        ProductImageInline,
        VariationInline,
    ]

    class Meta:
        model = Product


admin.site.register(Product, ProductAdmin)
admin.site.register(ProductImage)
admin.site.register(Category)
admin.site.register(Variation)
admin.site.register(ProductBrand)
admin.site.register(ProductSeller)

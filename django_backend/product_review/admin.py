from django.contrib import admin

from .models import Review

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    date_hierarchy = 'creation_date'
    list_display = ['product','value','creation_date', 'user']
    list_select_related = ['product', 'user']
    ordering = ['creation_date']
    search_fields=['product__title', 'user__username']

    def get_readonly_fields(self, request, obj=None):
        # make all fields readonly
        readonly_fields = list(set(
            [field.name for field in self.opts.local_fields] +
            [field.name for field in self.opts.local_many_to_many]
        ))
        if 'is_submitted' in readonly_fields:
            readonly_fields.remove('is_submitted')
        return readonly_fields


from django.contrib import admin

from newsletter.models import NewSletter


class NewSletterAdmin(admin.ModelAdmin):
    list_filter = ['email']
    list_display = ['email']

admin.site.register(NewSletter, NewSletterAdmin)

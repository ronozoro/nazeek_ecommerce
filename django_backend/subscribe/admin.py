from django.contrib import admin

from .models import SignUp


# Register your models here.

class SignUpAdmin(admin.ModelAdmin):
    list_display = ["__str__", "timestamp", "updated"]


admin.site.register(SignUp, SignUpAdmin)

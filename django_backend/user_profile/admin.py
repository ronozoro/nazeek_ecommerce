from django.contrib import admin
from user_profile.models import UserProfile

class UserProfileAdmin(admin.ModelAdmin):
    pass
admin.site.register(UserProfile, UserProfileAdmin)
# coding=utf-8
from django.contrib.auth import get_user_model
from django.db import models
from django.utils.translation import gettext as _

User = get_user_model()


class UserProfile(models.Model):
    user = models.OneToOneField(User, unique=True)
    full_name = models.CharField(null=True, blank=True, max_length=255)
    mobile = models.CharField(null=True, blank=True, max_length=20)
    website = models.URLField(blank=True, null=True)
    about = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        verbose_name = _("user profile")
        verbose_name_plural = _("users profiles")

    def __str__(self):
        return "%s , %s" % (self.full_name, self.mobile)

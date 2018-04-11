from allauth.account.adapter import DefaultAccountAdapter
from django.contrib.sites.shortcuts import get_current_site

from .models import UserProfile


class MyAccountAdapter(DefaultAccountAdapter):

    def get_email_confirmation_url(self, request, emailconfirmation):
        current_site = get_current_site(request)
        return '{}/account/confirm-email/{}/'.format(current_site, emailconfirmation.key)

    def save_user(self, request, user, form, commit=True):
        res = super(MyAccountAdapter, self).save_user(request, user, form, commit=commit)
        profile = UserProfile.objects.create(user=res)
        if request.data:
            mobile = request.data.get('mobile')
            full_name = request.data.get('full_name')
            if mobile:
                profile.mobile = mobile
            if full_name:
                profile.full_name = full_name
            profile.save()
        return res

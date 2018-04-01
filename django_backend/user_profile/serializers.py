# coding=utf-8
from rest_framework import serializers
from rest_auth.serializers import UserDetailsSerializer


class UserSerializer(UserDetailsSerializer):

    website = serializers.URLField(source="userprofile.website", allow_blank=True, required=False)
    about = serializers.CharField(source="userprofile.about", allow_blank=True, required=False)
    mobile = serializers.CharField(source="userprofile.mobile", allow_blank=True, required=False)
    full_name = serializers.CharField(source="userprofile.full_name", allow_blank=True, required=False)

    class Meta(UserDetailsSerializer.Meta):
        fields = UserDetailsSerializer.Meta.fields + ('website', 'about', 'mobile', 'full_name')

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('userprofile', {})
        website = profile_data.get('website')
        about = profile_data.get('about')
        mobile = profile_data.get('mobile')
        full_name = profile_data.get('full_name')

        instance = super(UserSerializer, self).update(instance, validated_data)
        # get and update user profile
        profile = instance.userprofile
        if profile_data:
            if website:
                profile.website = website
            if about:
                profile.about = about
            if mobile:
                profile.mobile = mobile
            if full_name:
                profile.full_name = full_name
            profile.save()
        return instance

from rest_framework import serializers

from .models import SignUp


class SubscribeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = SignUp
        fields = ('name', 'parent_id', 'slug')

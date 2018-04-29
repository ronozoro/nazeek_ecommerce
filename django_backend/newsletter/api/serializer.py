from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer

from newsletter.models import NewSletter


class NewSletterSerializer(ModelSerializer):

    class Meta:
        model = NewSletter
        fields = '__all__'

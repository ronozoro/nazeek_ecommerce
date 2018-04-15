from rest_framework import serializers
from rest_framework.generics import CreateAPIView

from .models import SignUp


class SignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignUp
        fields = ('email', 'full_name')


class SubscribeSerializer(CreateAPIView):
    model = SignUp
    serializer_class = SignUpSerializer

from rest_framework import generics

from .models import SignUp
from .serializers import SubscribeSerializer


class SubscribeViewSet(generics.ListAPIView):
    queryset = SignUp.objects.all()
    serializer_class = SubscribeSerializer

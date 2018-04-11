from rest_framework import viewsets

from .models import SignUp
from .serializers import SubscribeSerializer


class SubscribeViewSet(viewsets.ModelViewSet):
    queryset = SignUp.objects.all()
    serializer_class = SubscribeSerializer

from rest_framework import generics

from .models import DummyPages
from .serializers import (DummyPagesSerializer)


class DummyListAPIView(generics.ListAPIView):
    queryset = DummyPages.objects.all()
    serializer_class = DummyPagesSerializer
    search_fields = ["title"]
    ordering_fields = ["title", "id"]

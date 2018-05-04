from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import status
from django.http import Http404

from .serializers import ReviewListSerializer
from .models import Review

class ReviewList(ListCreateAPIView):
    serializer_class = ReviewListSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, )
    def get_queryset(self):
        try:
            return Review.objects.select_related(
                'product',
                'user'
            ).filter(
                product=self.kwargs['product_id']
            )
        except Review.DoesNotExist:
            raise Http404


    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data={**request.data,
            "user": request.user.username})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED,
            headers=headers)

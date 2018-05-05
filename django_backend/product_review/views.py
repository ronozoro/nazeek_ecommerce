import json

import requests
from django.contrib.auth import get_user_model
from django.http import Http404
from rest_framework import status
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from .serializers import ReviewListSerializer
from .models import Review

User = get_user_model()


class ReviewList(ListCreateAPIView):
    serializer_class = ReviewListSerializer
    # permission_classes = (IsAuthenticatedOrReadOnly, )
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
        token = request.GET.get('token')
        user_id = requests.get('http://localhost:8000/rest-auth/user/', headers={'authorization': 'Token ' + token})
        user_id = json.loads(user_id.text)
        user_record = User.objects.filter(pk=user_id.get('pk'))

        serializer = self.get_serializer(data={**request.data,
                                               "user": user_record[0].username})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED,
                        headers=headers)

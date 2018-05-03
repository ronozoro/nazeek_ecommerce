from rest_framework import serializers

from .models import Review

class ReviewListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Review
        fields = ('id', 'product', 'user',
            'value', 'comment_text', 'creation_date')

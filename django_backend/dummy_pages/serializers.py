import base64

from django.core.files import File
from rest_framework import serializers

from .models import DummyPages


class DummyPagesSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = DummyPages
        fields = ('id', 'page_type', 'desc', 'image'
                  )

    def get_image(self, obj):
        f = open(obj.image.path, 'rb')
        image = File(f)
        data = base64.b64encode(image.read())
        f.close()
        return data

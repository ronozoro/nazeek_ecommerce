from rest_framework.generics import CreateAPIView

from newsletter.models import NewSletter
from newsletter.api.serializer import NewSletterSerializer


class NewSletterCreateAPIView(CreateAPIView):

    queryset = NewSletter.objects.all()
    serializer_class = NewSletterSerializer


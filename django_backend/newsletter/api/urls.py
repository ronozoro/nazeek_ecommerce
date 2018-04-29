from django.conf.urls import url

from newsletter.api.views import NewSletterCreateAPIView


urlpatterns = [
    url(r'^$', NewSletterCreateAPIView.as_view(), name='post-create'),
]

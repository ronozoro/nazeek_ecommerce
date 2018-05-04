from django.conf.urls import url
from django.views.decorators.csrf import ensure_csrf_cookie

from .views import ReviewList

urlpatterns = [
    url(r"^reviews/(?P<product_id>[0-9]+)/$",
        ensure_csrf_cookie(ReviewList.as_view()), name='review-list'),
]

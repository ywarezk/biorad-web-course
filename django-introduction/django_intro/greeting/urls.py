from django.conf.urls import url
from greeting.views import index

urlpatterns = [
    url(r'^$', index)
]
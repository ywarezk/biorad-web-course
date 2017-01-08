from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.list),
    url(r'^(?P<id>[0-9]+)/(?P<slug>[\w-]+)/$', views.detail, name='blog_details')
]
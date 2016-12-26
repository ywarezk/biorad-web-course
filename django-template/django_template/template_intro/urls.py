from django.conf.urls import url
from template_intro import views

urlpatterns = [
    url(r'^$', views.index)
]
from django.conf.urls import url
from pokemon_forms import views


urlpatterns = [
    url(r'^$', views.index)
]
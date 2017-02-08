from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^pokemon-catcher/$', views.PokemonCatcherListCreateAPIView.as_view()),
    url(r'^pokemon/$', views.PokemonListCreateAPIView.as_view()),
    url(r'^pokemon/(?P<pk>\d+)/$', views.PokemonRetrieveUpdateDestroyAPIView.as_view()),
]
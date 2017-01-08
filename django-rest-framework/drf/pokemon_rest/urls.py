from django.conf.urls import url
from pokemon_rest.views import PokemonAPIView, PokemonDetailAPIView

urlpatterns = [
    url(r'^pokemon/$', PokemonAPIView.as_view()),
    url(r'^pokemon/(?P<pk>[0-9]+)/$', PokemonDetailAPIView.as_view())
]
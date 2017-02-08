from django.conf.urls import url
from pokemon_rest.rest.user.user_viewset import PokemonLoginViewSet
from pokemon_rest.rest.pokemon.pokemon_viewset import PokemonViewSet

urlpatterns = [
    url(r'^user/login/$', PokemonLoginViewSet.as_view()),
    url(r'^pokemon/$', PokemonViewSet.as_view({'get': 'list'}))
]
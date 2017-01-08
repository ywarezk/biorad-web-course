from rest_framework import views
from rest_framework.response import Response
from pokemon_rest.serializers import PokemonSerializer
from pokemon_rest.models import Pokemon
from rest_framework import generics

# Create your views here.
class PokemonAPIView(generics.ListCreateAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

class PokemonDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
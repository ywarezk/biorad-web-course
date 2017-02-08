from django.http import HttpResponse
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import *
from .serializers import *

class PokemonListCreateAPIView(ListCreateAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

class PokemonCatcherListCreateAPIView(ListCreateAPIView):
    queryset = PokemonCatcher.objects.all()
    serializer_class = PokemonCatcherSerializer

class PokemonRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer


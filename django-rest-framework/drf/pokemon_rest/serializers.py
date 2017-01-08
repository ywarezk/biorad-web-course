from rest_framework import serializers
from pokemon_rest.models import Pokemon


class PokemonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pokemon
        exclude = ()




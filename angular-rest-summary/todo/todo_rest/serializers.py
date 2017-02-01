from rest_framework.serializers import ModelSerializer
from .models import Pokemon, PokemonCatcher



class PokemonSerializer(ModelSerializer):
    #catcher = PokemonCatcherSerializer(many=False)
    class Meta:
        model = Pokemon
        exclude = ()


class PokemonCatcherSerializer(ModelSerializer):
    pokemon_set = PokemonSerializer(many=True)
    class Meta:
        model = PokemonCatcher
        exclude = ()
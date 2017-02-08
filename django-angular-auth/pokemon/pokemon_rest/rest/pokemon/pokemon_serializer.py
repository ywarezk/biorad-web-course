from rest_framework.serializers import ModelSerializer
from pokemon_rest.models import Pokemon

class PokemonSerializer(ModelSerializer):
    class Meta:
        model = Pokemon
        exclude = ()

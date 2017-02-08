from rest_framework.viewsets import ReadOnlyModelViewSet
from pokemon_rest.models import Pokemon
from pokemon_rest.rest.pokemon.pokemon_serializer import PokemonSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated


class PokemonViewSet(ReadOnlyModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        queryset = super(PokemonViewSet, self).get_queryset()
        user = self.request.user
        return queryset.filter(catcher=user)




from rest_framework.test import APITestCase
from rest_framework.status import HTTP_401_UNAUTHORIZED, HTTP_200_OK
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
import json

class TestPokemonApi(APITestCase):
    fixtures = ['user.json', 'pokemon.json']

    def test_pokemon_bad_auth(self):
        resp = self.client.get('/api/v1.0/pokemon/?format=json')
        self.assertEqual(resp.status_code, HTTP_401_UNAUTHORIZED)

    def test_permissions(self):
        erez = User.objects.get(username='erez')
        token = Token.objects.get(user=erez)
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        resp = self.client.get('/api/v1.0/pokemon/?format=json')
        self.assertEqual(resp.status_code, HTTP_200_OK)
        self.assertEqual(len(json.loads(resp.content)), 1)


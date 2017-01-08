from rest_framework.test import APITestCase
import json
from pokemon_rest.models import Pokemon

class PokemonAPITestCase(APITestCase):
    fixtures = ['pokemon.json']

    def test_list(self):
        resp = self.client.get('/api/v1.0/pokemon/?format=json')
        pokemons = json.loads(resp.content)
        self.assertEqual(len(pokemons), 3)

    def test_retrieve(self):
        resp = self.client.get('/api/v1.0/pokemon/1/?format=json')
        pokemon = json.loads(resp.content)
        self.assertEqual(pokemon['name'], 'pikachu')

    def test_create(self):
        resp = self.client.post('/api/v1.0/pokemon/', data={
            'name': 'balbasour',
            'strength': 50,
            'date_added': '2016-02-27'
        })
        pokemon = json.loads(resp.content)
        self.assertEqual(pokemon['name'], 'balbasour')
        self.assertEqual(Pokemon.objects.all().count(), 4)

    def test_put(self):
        resp = self.client.put('/api/v1.0/pokemon/1/', data={
            "name": "pikachu2",
            "strength": 20,
            "date_added": "2017-01-08"
        })
        self.assertEqual(Pokemon.objects.get(id=1).name, 'pikachu2')

    def test_delete(self):
        resp = self.client.delete('/api/v1.0/pokemon/1/')
        self.assertEqual(Pokemon.objects.all().count(), 2)

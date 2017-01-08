from django.db import models

# GET: /api/pokemon/
# Post: /api/pokemon/ body{}
# GET: /api/pokemon/1/
# PUT: /api/pokemon/1/ body{}
# DELETE: /api/pokemon/1/
class Pokemon(models.Model):
    name = models.CharField(max_length=200, blank=False, null=False)
    strength = models.PositiveIntegerField(default=0)
    date_added = models.DateField()

# pikachu : Pokemon => {name: 'pikachu', strength: 10, date_added: '2017-02-27'}

# {name: 'pikachu', strength: 10, date_added: '2017-02-27'} => pikachu : Pokemon

# validation on the second flow
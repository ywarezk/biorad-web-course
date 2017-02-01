from django.db import models

class PokemonCatcher(models.Model):
    first_name = models.CharField(max_length=200, blank=False, null=False)
    last_name = models.CharField(max_length=200, blank=False, null=False)

class Pokemon(models.Model):
    catcher = models.ForeignKey(PokemonCatcher, default=None, blank=True, null=True)
    name = models.CharField(max_length=200, blank=False, null=False)
    strength = models.PositiveIntegerField(default=0)
    date_added = models.DateField()



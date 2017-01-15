from django.db import models

class Pokemon(models.Model):
    name = models.CharField(max_length=200)
    strength = models.PositiveIntegerField(default=0)
    date_added = models.DateField()

    def __unicode__(self):
        return self.name
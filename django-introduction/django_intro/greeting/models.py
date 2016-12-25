from django.db import models

# Create your models here.
class Greeting(models.Model):
    title = models.CharField(max_length=300,
                             blank=False,
                             null=False,
                             default='',
                             unique=True
                             )





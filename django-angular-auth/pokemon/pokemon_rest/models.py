from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

class Pokemon(models.Model):
    catcher = models.ForeignKey(User)
    name = models.CharField(max_length=200)
    strength = models.PositiveIntegerField(default=0)
    description = models.TextField()


@receiver(post_save, sender=User)
def create_token_for_user(sender, **kwargs):
    Token.objects.create(user=kwargs['instance'])



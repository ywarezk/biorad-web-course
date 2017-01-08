from django.db import models
from django.db.transaction import Q

class Author(models.Model):
    first_name = models.CharField(max_length=200, default='yariv')
    last_name = models.CharField(max_length=200)

class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField()
    date = models.DateField()
    author = models.ForeignKey(Author)

class Tag(models.Model):
    title = models.CharField(max_length=200)
    posts = models.ManyToManyField(Post)

class AuthorSettings(models.Model):
    is_visible = models.BooleanField(default=True)
    author = models.OneToOneField(Author)

from django.db import models

class Author(models.Model):
    first_name = models.CharField(max_length=200, blank=False, null=False)
    last_name = models.CharField(max_length=200)

class Post(models.Model):
    title = models.CharField(max_length=300, blank=False, null=False)
    body = models.TextField()
    author = models.ForeignKey(Author)

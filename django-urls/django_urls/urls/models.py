from django.db import models
from django.template.defaultfilters import slugify

class Author(models.Model):
    first_name = models.CharField(max_length=200, blank=False, null=False)
    last_name = models.CharField(max_length=200)

class Post(models.Model):
    title = models.CharField(max_length=300, blank=False, null=False)
    slug = models.SlugField(max_length=320, blank=True, null=True)
    body = models.TextField()
    author = models.ForeignKey(Author)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        self.slug = slugify(self.title)
        return super(Post, self).save(force_insert=False, force_update=False, using=None,
             update_fields=None)


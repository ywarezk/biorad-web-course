# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-08 09:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('urls', '0002_post'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='slug',
            field=models.SlugField(blank=True, max_length=320, null=True),
        ),
    ]

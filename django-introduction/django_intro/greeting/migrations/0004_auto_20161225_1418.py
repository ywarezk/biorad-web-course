# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-25 14:18
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('greeting', '0003_remove_greeting_message'),
    ]

    operations = [
        migrations.AlterField(
            model_name='greeting',
            name='title',
            field=models.CharField(default=b'', max_length=300, unique=True),
        ),
    ]

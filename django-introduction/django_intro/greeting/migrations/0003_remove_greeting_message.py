# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-25 13:48
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('greeting', '0002_auto_20161225_1347'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='greeting',
            name='message',
        ),
    ]

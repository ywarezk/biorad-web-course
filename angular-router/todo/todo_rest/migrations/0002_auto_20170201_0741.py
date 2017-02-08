# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-01 07:41
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('todo_rest', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PokemonCatcher',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200)),
                ('last_name', models.CharField(max_length=200)),
            ],
        ),
        migrations.AddField(
            model_name='pokemon',
            name='catcher',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, to='todo_rest.PokemonCatcher'),
        ),
    ]
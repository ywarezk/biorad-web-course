# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-26 14:10
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AuthorSettings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_visible', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('posts', models.ManyToManyField(to='blog.Post')),
            ],
        ),
        migrations.AlterField(
            model_name='author',
            name='first_name',
            field=models.CharField(default=b'yariv', max_length=200),
        ),
        migrations.AddField(
            model_name='authorsettings',
            name='author',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='blog.Author'),
        ),
    ]
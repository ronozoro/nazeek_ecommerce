# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2018-04-08 01:20
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ('product', '0002_auto_20180407_0343'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='productfeatured',
            name='product',
        ),
        migrations.DeleteModel(
            name='ProductFeatured',
        ),
    ]

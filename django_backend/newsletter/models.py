# -*- coding: utf-8 -*-
from django.db import models


class NewSletter(models.Model):

    email = models.EmailField(max_length=254)
    active=models.BooleanField(default=True)
    @property
    def owner(self):
        return self.email

    class Meta:
        verbose_name = 'NewSletter'
        ordering = ['email']

    def __str__(self):
        return self.email

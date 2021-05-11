from django.db import models
from django.utils import timezone


class Pass(models.Model):
    """Model to represent available cards."""

    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    descripion = models.TextField()
    price_per_month = models.IntegerField(default=0)
    slug = models.SlugField(max_length=100)

    class Meta:
        ordering = ('-price_per_month',)
        verbose_name_plural = 'Passes'

    def __str__(self):
        return self.name

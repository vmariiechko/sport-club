from django.db import models
from django.utils import timezone


def upload_to(instance, filename):
    return f'cards/{filename}'


class Pass(models.Model):
    """Model to represent available cards."""

    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    image = models.ImageField("Pass Image", upload_to=upload_to, default='cards/default.jpg')
    descripion = models.TextField()
    visits_count = models.PositiveIntegerField(default=0)
    with_trainer = models.BooleanField(default=False)
    price_per_month = models.PositiveIntegerField(default=0)
    slug = models.SlugField(max_length=100)

    class Meta:
        ordering = ('-price_per_month',)
        verbose_name_plural = 'Passes'

    def __str__(self):
        return self.name

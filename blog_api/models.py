from django.db import models
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=200)
    content = models.TextField()
    slug = models.SlugField(max_length=200, unique_for_date='published')
    published = models.DateTimeField(default=timezone.now)
    status = models.CharField(max_length=10, choices=options, default='published')

    objects = models.Manager()
    postobjects = PostObjects()

    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title

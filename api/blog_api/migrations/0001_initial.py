# Generated by Django 3.2 on 2021-05-26 17:13

import api.blog_api.models
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('image', models.ImageField(default='posts/default.jpg', upload_to=api.blog_api.models.upload_to, verbose_name='Post Image')),
                ('content', models.TextField()),
                ('slug', models.SlugField(max_length=200, unique_for_date='published')),
                ('published', models.DateTimeField(default=django.utils.timezone.now)),
                ('status', models.CharField(choices=[('draft', 'Draft'), ('published', 'Published')], default='published', max_length=10)),
                ('category', models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, to='blog_api.category')),
            ],
            options={
                'ordering': ('-published',),
            },
        ),
    ]

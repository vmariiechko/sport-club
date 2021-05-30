# Generated by Django 3.2 on 2021-05-29 16:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts_api', '0002_trainer'),
        ('reservation_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='trainer',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='accounts_api.trainer'),
        ),
    ]
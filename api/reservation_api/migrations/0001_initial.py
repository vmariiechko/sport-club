# Generated by Django 3.2 on 2021-05-29 15:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('subscription_api', '0001_initial'),
        ('accounts_api', '0002_trainer'),
    ]

    operations = [
        migrations.CreateModel(
            name='Reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.PositiveSmallIntegerField(choices=[(1, 'Requested'), (2, 'Accepted'), (3, 'Denied')], default=1)),
                ('reserved_start', models.DateTimeField()),
                ('reserved_end', models.DateTimeField()),
                ('updated', models.DateTimeField(auto_now=True)),
                ('subscription', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='subscription_api.subscription')),
                ('trainer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts_api.trainer')),
            ],
        ),
    ]
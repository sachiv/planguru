# Generated by Django 2.0.3 on 2018-03-31 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_event_booked_by'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='end_datetime',
        ),
        migrations.RemoveField(
            model_name='event',
            name='start_datetime',
        ),
        migrations.AddField(
            model_name='event',
            name='date',
            field=models.DateField(blank=True, default=None, null=True, verbose_name='Date'),
        ),
        migrations.AddField(
            model_name='event',
            name='time',
            field=models.TimeField(blank=True, default=None, null=True, verbose_name='Time'),
        ),
    ]

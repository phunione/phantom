# Generated by Django 4.2.3 on 2023-12-14 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('owner', '0003_remove_owner_banker'),
        ('banker', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='banker',
            name='owner',
            field=models.ManyToManyField(blank=True, to='owner.owner'),
        ),
    ]

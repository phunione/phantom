# Generated by Django 4.2.8 on 2023-12-12 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Banker',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('rtds', models.BooleanField(default=False)),
                ('rt', models.BooleanField(default=False)),
                ('forex', models.BooleanField(default=False)),
                ('demand', models.CharField(choices=[('', 'Select Demand'), ('one', 'One'), ('both', 'Both'), ('none', 'None')], default='', max_length=100)),
            ],
        ),
    ]
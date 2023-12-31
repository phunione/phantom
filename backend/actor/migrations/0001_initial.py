# Generated by Django 4.2.8 on 2023-12-12 14:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('bank', '0001_initial'),
        ('banker', '0001_initial'),
        ('owner', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Actor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('adhar_number', models.CharField(max_length=14)),
                ('pan_number', models.CharField(max_length=10)),
                ('din_number', models.CharField(blank=True, max_length=20, null=True)),
                ('otp_phoneNr', models.CharField(blank=True, max_length=20, null=True)),
                ('sim_number', models.CharField(blank=True, max_length=10, null=True)),
                ('email', models.EmailField(max_length=254)),
                ('per_phone', models.CharField(blank=True, max_length=20, null=True)),
                ('mother_name', models.CharField(blank=True, max_length=200, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('bank', models.ManyToManyField(blank=True, to='bank.bank')),
                ('banker', models.ManyToManyField(blank=True, to='banker.banker')),
                ('owner', models.ManyToManyField(blank=True, to='owner.owner')),
            ],
        ),
    ]

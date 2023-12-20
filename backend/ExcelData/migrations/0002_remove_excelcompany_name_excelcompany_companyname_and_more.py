# Generated by Django 4.2.3 on 2023-12-17 08:08

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ExcelData', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='excelcompany',
            name='name',
        ),
        migrations.AddField(
            model_name='excelcompany',
            name='companyname',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='excelcompany',
            name='mailid',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='excelcompany',
            name='dob',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='excelcompany',
            name='jurisdiction',
            field=models.CharField(blank=True, choices=[('', 'Select State'), ('Andhra Pradesh', 'Andhra Pradesh'), ('Arunachal Pradesh', 'Arunachal Pradesh'), ('Assam', 'Assam'), ('Bihar', 'Bihar'), ('Chhattisgarh', 'Chhattisgarh'), ('Goa', 'Goa'), ('Gujarat', 'Gujarat'), ('Haryana', 'Haryana'), ('Himachal Pradesh', 'Himachal Pradesh'), ('Jharkhand', 'Jharkhand'), ('Karnataka', 'Karnataka'), ('Kerala', 'Kerala'), ('Madhya Pradesh', 'Madhya Pradesh'), ('Maharashtra', 'Maharashtra'), ('Manipur', 'Manipur'), ('Meghalaya', 'Meghalaya'), ('Mizoram', 'Mizoram'), ('Nagaland', 'Nagaland'), ('Odisha', 'Odisha'), ('Punjab', 'Punjab'), ('Rajasthan', 'Rajasthan'), ('Sikkim', 'Sikkim'), ('Tamil Nadu', 'Tamil Nadu'), ('Telangana', 'Telangana'), ('Tripura', 'Tripura'), ('Uttar Pradesh', 'Uttar Pradesh'), ('Uttarakhand', 'Uttarakhand'), ('West Bengal', 'West Bengal')], default='', max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name='excelcompany',
            name='ownerpan',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=150, null=True), size=None),
        ),
        migrations.AlterField(
            model_name='excelcompany',
            name='panno',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
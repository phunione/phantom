# Generated by Django 4.2.8 on 2023-12-21 17:07

import company.models
import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0009_alter_company_pdfs'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='pdfs',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.FileField(blank=True, null=True, upload_to=company.models.file_path), default=list, size=None),
        ),
    ]

# Generated by Django 4.2.3 on 2023-12-15 13:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0002_company_banker'),
    ]

    operations = [
        migrations.RenameField(
            model_name='company',
            old_name='company_type',
            new_name='type',
        ),
    ]
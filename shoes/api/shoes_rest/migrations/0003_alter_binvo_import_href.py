# Generated by Django 4.0.3 on 2023-07-20 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0002_rename_wardrobe_bin_shoes_bin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='binvo',
            name='import_href',
            field=models.CharField(max_length=200),
        ),
    ]

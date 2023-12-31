# Generated by Django 4.0.3 on 2023-07-20 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shoes_rest', '0003_alter_binvo_import_href'),
    ]

    operations = [
        migrations.AlterField(
            model_name='binvo',
            name='bin_number',
            field=models.PositiveSmallIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='binvo',
            name='bin_size',
            field=models.PositiveSmallIntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='binvo',
            name='closet_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='binvo',
            name='import_href',
            field=models.CharField(max_length=200, unique=True),
        ),
    ]

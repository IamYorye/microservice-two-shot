# Generated by Django 4.0.3 on 2023-07-20 06:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0002_remove_locationvo_section_number_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hat',
            name='wardrobe_location',
        ),
        migrations.AlterField(
            model_name='hat',
            name='location',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='location', to='hats_rest.locationvo'),
        ),
    ]

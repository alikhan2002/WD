# Generated by Django 2.2 on 2022-04-08 15:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20220408_2018'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='categoryId',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.Category'),
            preserve_default=False,
        ),
    ]
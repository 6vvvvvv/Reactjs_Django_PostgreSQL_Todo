# Generated by Django 3.0.4 on 2020-03-17 17:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_auto_20200315_2146'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='key',
            field=models.IntegerField(default='0'),
        ),
    ]

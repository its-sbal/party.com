# Generated by Django 4.2 on 2023-05-05 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0004_alter_orders_totalprice'),
    ]

    operations = [
        migrations.DeleteModel(
            name='orders',
        ),
        migrations.RemoveField(
            model_name='user',
            name='password',
        ),
        migrations.AddField(
            model_name='user',
            name='my_array_field',
            field=models.JSONField(default=list),
        ),
        migrations.AddField(
            model_name='user',
            name='totalPrice',
            field=models.DecimalField(decimal_places=2, max_digits=5, null=True),
        ),
    ]

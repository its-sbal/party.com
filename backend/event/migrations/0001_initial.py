# Generated by Django 4.1.7 on 2023-03-24 10:50

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='orders',
            fields=[
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('quantity', models.IntegerField(blank=True, null=True)),
                ('bookFrom', models.DateField(auto_now_add=True)),
                ('bookUpto', models.DateField(auto_now_add=True)),
                ('isPaid', models.BooleanField(default=False)),
                ('totalPrice', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)])),
            ],
        ),
        migrations.CreateModel(
            name='user',
            fields=[
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('fName', models.CharField(blank=True, max_length=100, null=True)),
                ('lName', models.CharField(blank=True, max_length=100, null=True)),
                ('email', models.CharField(blank=True, max_length=100, null=True)),
                ('password', models.CharField(blank=True, max_length=100, null=True)),
                ('address', models.TextField(blank=True, max_length=100, null=True)),
                ('mobile', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)])),
            ],
        ),
        migrations.CreateModel(
            name='vendor',
            fields=[
                ('_id', models.AutoField(primary_key=True, serialize=False)),
                ('vendorName', models.CharField(blank=True, max_length=100, null=True)),
                ('service', models.CharField(blank=True, max_length=100, null=True)),
                ('numReview', models.IntegerField(blank=True, null=True)),
                ('rating', models.IntegerField(blank=True, null=True, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)])),
                ('description', models.TextField(blank=True, max_length=1000, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='')),
                ('price', models.DecimalField(decimal_places=2, max_digits=5)),
                ('email', models.CharField(blank=True, max_length=100, null=True)),
                ('password', models.CharField(blank=True, max_length=100, null=True)),
                ('mobile', models.IntegerField(blank=True, null=True)),
                ('address', models.TextField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]

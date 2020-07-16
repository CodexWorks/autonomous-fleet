# Generated by Django 3.0.7 on 2020-07-16 10:01

import datetime
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='TransportOrder',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transport_order_id', models.IntegerField(blank=True, null=True)),
                ('pickup_from', models.DateField(default=datetime.date.today, verbose_name='pickup from date')),
                ('pickup_until', models.DateField(default=datetime.date.today, verbose_name='pickup until date')),
                ('delivery_from', models.DateField(default=datetime.date.today, verbose_name='delivery from date')),
                ('delivery_until', models.DateField(default=datetime.date.today, verbose_name='delivery until date')),
                ('pickup_address_id', models.IntegerField(blank=True, null=True)),
                ('delivery_address_id', models.IntegerField(blank=True, null=True)),
                ('price', models.FloatField(blank=True, null=True)),
                ('currency', models.CharField(blank=True, max_length=3, null=True)),
                ('pallets', models.FloatField(blank=True, null=True)),
                ('weight', models.FloatField(blank=True, null=True)),
                ('ldm', models.FloatField(blank=True, null=True)),
                ('volume', models.FloatField(blank=True, null=True)),
            ],
            options={
                'db_table': 'transportorder',
            },
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_id', models.IntegerField(blank=True, null=True)),
                ('vat_id', models.CharField(blank=True, max_length=150, null=True)),
                ('is_supplier', models.BooleanField(blank=True, null=True)),
                ('is_client', models.BooleanField(blank=True, null=True)),
                ('adress', models.CharField(blank=True, max_length=255, null=True)),
                ('country_id', models.IntegerField(blank=True, null=True)),
                ('country', models.CharField(blank=True, max_length=150, null=True)),
                ('registration_number', models.IntegerField(blank=True, null=True)),
                ('user', models.ManyToManyField(to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'company',
            },
        ),
    ]

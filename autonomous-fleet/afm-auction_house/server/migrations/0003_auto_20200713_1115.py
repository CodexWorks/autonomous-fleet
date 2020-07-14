# Generated by Django 3.0.8 on 2020-07-13 08:15

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_auto_20200622_0946'),
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
                ('volume', models.FloatField(blank=True, null=True)),
            ],
            options={
                'db_table': 'transportorder',
            },
        ),
        migrations.DeleteModel(
            name='Text',
        ),
    ]
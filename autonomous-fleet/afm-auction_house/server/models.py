from django.db import models
from django.contrib.auth import get_user_model

import datetime

class TransportOrder(models.Model):
    transport_order_id = models.IntegerField(blank=True, null=True)
    pickup_from = models.DateField(('pickup from date'), default=datetime.date.today)
    pickup_until = models.DateField(('pickup until date'), default=datetime.date.today)
    delivery_from = models.DateField(('delivery from date'), default=datetime.date.today)
    delivery_until = models.DateField(('delivery until date'), default=datetime.date.today)
    pickup_address_id = models.IntegerField(blank=True, null=True)
    delivery_address_id = models.IntegerField(blank=True, null=True)
    price = models.FloatField(blank=True, null=True)
    currency = models.CharField(blank=True, null=True, max_length=3)
    pallets = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    ldm = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)

    class Meta:
        db_table = "transportorder"

    def __str__(self):
        return str(self.transport_order_id)

class Company(models.Model):
    user = models.ManyToManyField(get_user_model())
    company_id = models.IntegerField(blank=True, null=True)
    vat_id = models.CharField(blank=True, null=True, max_length=150)
    is_supplier = models.BooleanField(blank=True, null=True)
    is_client = models.BooleanField(blank=True, null=True)
    adress = models.CharField(blank=True, null=True, max_length=255)
    country_id = models.IntegerField(blank=True, null=True)
    country =  models.CharField(blank=True, null=True, max_length=150)
    registration_number = models.IntegerField(blank=True, null=True)
    class Meta:
        db_table = 'company'
    def __str__(self):
        return str(self.company_id)


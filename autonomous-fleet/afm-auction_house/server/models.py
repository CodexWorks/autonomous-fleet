from django.db import models

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
    volume = models.FloatField(blank=True, null=True)

    class Meta:
        db_table = "transportorder"

    def __str__(self):
        return str(self.transport_order_id)
from django.db import models
from django.contrib.auth import get_user_model

import datetime

class TransportOrder(models.Model):

    class OrderStatus(models.TextChoices):
        AVAILABLE = 'Available'
        PENDING = 'Pending'
        ACCEPTED = 'Accepted'

    auction_room_id = models.ForeignKey('AuctionRoom', on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), related_name='user', on_delete=models.CASCADE, null=True)
    transport_order_id = models.IntegerField(blank=True, null=True)
    pickup_from = models.DateField(('pickup from date'), default=datetime.date.today)
    pickup_until = models.DateField(('pickup until date'), default=datetime.date.today)
    delivery_from = models.DateField(('delivery from date'), default=datetime.date.today)
    delivery_until = models.DateField(('delivery until date'), default=datetime.date.today)
    pickup_address = models.ForeignKey('Address', related_name='pickup_address', on_delete=models.CASCADE)
    delivery_address = models.ForeignKey('Address', related_name='delivery_address', on_delete=models.CASCADE)
    price = models.FloatField(blank=True, null=True)
    currency = models.CharField(blank=True, null=True, max_length=3)
    pallets = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    ldm = models.FloatField(blank=True, null=True)
    volume = models.FloatField(blank=True, null=True)
    supplier_company = models.ForeignKey('Company',  null=True, blank=True, on_delete=models.CASCADE)
    supplier_user = models.ForeignKey(get_user_model(), related_name='supplier_user', null=True, blank=True, on_delete=models.CASCADE)
    status = models.CharField(max_length=15, choices=OrderStatus.choices, default=OrderStatus.AVAILABLE)

    class Meta:
        db_table = 'transport_orders'

    def __str__(self):
        return str(self.transport_order_id)

class Company(models.Model):
    user = models.ManyToManyField(get_user_model())
    company_id = models.IntegerField(blank=True, null=True)
    company_name = models.CharField(blank=True, null=True, max_length=255)
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


class Address(models.Model):
    address_id = models.IntegerField(blank=True, null=True)
    country =  models.CharField(blank=True, null=True, max_length=150)
    country_id = models.IntegerField(blank=True, null=True)
    county = models.CharField(blank=True, null=True, max_length=150)
    city = models.CharField(blank=True, null=True, max_length=150)
    street = models.CharField(blank=True, null=True, max_length=255)
    street_no = models.IntegerField(blank=True, null=True)
    zip_code = models.IntegerField(blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    long = models.FloatField(blank=True, null=True)
    address_string = models.CharField(blank=True, null=True, max_length=255)
    company_location = models.CharField(blank=True, null=True, max_length=255)

    class Meta:
        db_table = 'address'
    
    def __str__(self):
        return str(self.address_id)

class AuctionRoom(models.Model):
    auction_room_id = models.IntegerField(blank=True, null=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    creation_date = models.DateField(default=datetime.date.today)
    name = models.CharField(blank=True, null=True, max_length=255)
    description = models.TextField(blank=True, null=True)
    is_visible = models.BooleanField(blank=True, null=True)
    is_open = models.BooleanField(blank=True, null=True)
    is_active = models.BooleanField(blank=True, null=True)

    class Meta:
        db_table = 'auction_rooms'

    def __str__(self):
        return str(self.auction_room_id)
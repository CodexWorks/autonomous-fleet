from rest_framework import serializers

from server.models import TransportOrder

class TransportOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransportOrder
        fields = ('transport_order_id', 'pickup_from', 'pickup_until', 'delivery_from', 'delivery_until', 'pickup_address_id', 'delivery_address_id', 'price', 'currency', 'pallets', 'weight', 'volume')
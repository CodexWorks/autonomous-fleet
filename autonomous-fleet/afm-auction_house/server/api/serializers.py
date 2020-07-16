from rest_framework import serializers

from server.models import TransportOrder
from server.models import Company

class TransportOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransportOrder
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Company
        fields = '__all__'
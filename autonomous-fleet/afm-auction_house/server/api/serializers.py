from rest_framework import serializers

from server.models import TransportOrder, Company, Address, AuctionRoom

class TransportOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = TransportOrder
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Company
        fields = '__all__'

class AddressSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Address
        fields = '__all__'

class AuctionRoomSerializer(serializers.ModelSerializer):
    class Meta: 
        model = AuctionRoom
        fields = '__all__'
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view, action
from django.views.decorators.csrf import csrf_exempt

from server.models import TransportOrder, Company, Address, AuctionRoom
from django.contrib.auth import get_user_model
from .serializers import TransportOrderSerializer, CompanySerializer, AddressSerializer, AuctionRoomSerializer

import json

class TransportOrderViewSet(viewsets.ModelViewSet):
    serializer_class = TransportOrderSerializer
    queryset = TransportOrder.objects.all()

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

    @action(detail=False, methods=['get'])
    def user_companies(self, request):
        data = request.query_params
        if request.method == 'GET':
            user = get_user_model().objects.get(id=data['id'])
            companies = user.company_set.all()
            serializer = CompanySerializer(companies, many=True)
            return Response(serializer.data)

class AddressViewSet(viewsets.ModelViewSet):
    serializer_class = AddressSerializer
    queryset = Address.objects.all()

class AuctionRoomViewSet(viewsets.ModelViewSet):
    serializer_class = AuctionRoomSerializer
    queryset = AuctionRoom.objects.all()

    @action(detail=False, methods=['get'])
    def get_auction_rooms(self, request):
        data = request.query_params
        if request.method == 'GET':
            user_req = get_user_model().objects.get(id=data['id'])
            auction_rooms = AuctionRoom.objects.filter(user=user_req)
            serializer = AuctionRoomSerializer(auction_rooms, many=True)
            return Response(serializer.data)


@api_view(('POST',))
def userInfo(request):
    data = json.loads(request.body.decode('utf-8'))
    if request.method == 'POST':
        user = Token.objects.get(key=data['key']).user
        return Response({"id": user.id})
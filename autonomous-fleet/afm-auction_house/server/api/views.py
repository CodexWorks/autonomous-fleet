from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view, action
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework.exceptions import APIException

from server.models import TransportOrder, Company, Address, AuctionRoom
from django.contrib.auth import get_user_model
from .serializers import TransportOrderSerializer, CompanySerializer, AddressSerializer, AuctionRoomSerializer
import json
from server.dataValidation import Validation_Data

# This function return the user with a certain id

def getUserName(data):
    return get_user_model().objects.get(id=data['id'])



class TransportOrderViewSet(viewsets.ModelViewSet):
    serializer_class = TransportOrderSerializer
    queryset = TransportOrder.objects.all()

    @action(detail=False, methods=['get'])
    def user_orders(self, request):
        data = request.query_params
        orders = TransportOrder.objects.filter(user=data['id'])
        serializer = TransportOrderSerializer(orders, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['get'])
    def auction_room_orders(self, request):
        data = request.query_params
        orders = TransportOrder.objects.filter(auction_room_id=data['id'])
        serializer = TransportOrderSerializer(orders, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def update_order_state(self, request):
        data = json.loads(request.body.decode('utf-8'))
        order = TransportOrder.objects.get(id=data['id'])
        order.supplier_company_id=data['company']
        order.supplier_user_id=data['user']
        order.status='Accepted'
        order.save()
        return HttpResponse(status=204)

    @action(detail=False, methods=['get'])
    def user_accepted_orders(self, request):
        data = request.query_params
        accepted_orders = TransportOrder.objects.filter(supplier_user=data['user'])
        serializer = TransportOrderSerializer(accepted_orders, many=True)
        return Response(serializer.data)

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

    # This function receives a username and obtains a primary key from the database
    #
    # The key is used to return the user's companies

    @action(detail=False, methods=['get'])
    def user_companies(self, request):
        data = request.query_params
        if request.method == 'GET':
            id = User.objects.get(username=data["username"]).pk
            user=get_user_model().objects.get(id=id)
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
            user_req = getUserName(data)
            auction_rooms = AuctionRoom.objects.filter(user=user_req)
            serializer = AuctionRoomSerializer(auction_rooms, many=True)
            return Response(serializer.data)


@api_view(('POST',))
def userInfo(request):
    data = json.loads(request.body.decode('utf-8'))
    if request.method == 'POST':
        user = Token.objects.get(key=data['key']).user
        return Response({"id": user.id})



# This function is a workaround for sign up
#
# Receive the data through a post call, create a django User object and save it in the database.


@api_view(['POST'])
def createUser(request):

    data = json.loads(request.body.decode('utf-8'))
    
    credentials=[
                    [data['username'],"[a-zA-Z]",4,150],
                    [data['password1'],"[A-Za-z0-9@#$%^&*]+",8,150], #I choose arbitrarily a minimum and a maximum length
                    [data['password2'],"[A-Za-z0-9@#$%^&*]+",8,150], #I choose arbitrarily a minimum and a maximum length
                    [data['email'],"[A-Za-z0-9]+@[A-Za-z0-9]+\.[a-z]{,3}",6,150]
                ]

    if request.method == "POST":
        try:
            if not data["password1"]==data["password2"]:
                raise Exception("The passwords are not the same")
            validation=Validation_Data()
            for inp in credentials:
                message=validation.entityField(inp)
                if not message==None:
                    raise Exception(message)
            user=User.objects.create_user(username=data["username"],email=data["email"],password=data["password1"])
            user.save()
            token= Token.objects.create(user=user)
            return Response({'key':token.key})
        except Exception as er:
            print("Error: ",er)
            return Response({'error':str(er)},status=status.HTTP_400_BAD_REQUEST)

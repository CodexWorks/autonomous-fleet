from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt

from server.models import TransportOrder
from server.models import Company
from django.contrib.auth import get_user_model
from .serializers import TransportOrderSerializer
from .serializers import CompanySerializer

import json
from django.http import JsonResponse

class TransportOrderViewSet(viewsets.ModelViewSet):
    serializer_class = TransportOrderSerializer
    queryset = TransportOrder.objects.all()

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()

@api_view(('POST',))
def userInfo(request):
    data = json.loads(request.body.decode('utf-8'))
    if request.method == 'POST':
        user = Token.objects.get(key=data['key']).user
        return Response({"id": user.id})

@api_view(('GET',))
def userCompanies(request):
    data = request.query_params
    if request.method == 'GET':
        user = get_user_model().objects.get(id=data['id'])
        companies = user.company_set.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)


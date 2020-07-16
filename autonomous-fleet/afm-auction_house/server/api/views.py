from rest_framework import viewsets

from server.models import TransportOrder
from server.models import Company
from .serializers import TransportOrderSerializer
from .serializers import CompanySerializer

class TransportOrderViewSet(viewsets.ModelViewSet):
    serializer_class = TransportOrderSerializer
    queryset = TransportOrder.objects.all()

class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    queryset = Company.objects.all()
from rest_framework import viewsets

from server.models import TransportOrder
from .serializers import TransportOrderSerializer

class TransportOrderViewSet(viewsets.ModelViewSet):
    serializer_class = TransportOrderSerializer
    queryset = TransportOrder.objects.all()
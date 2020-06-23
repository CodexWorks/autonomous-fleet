from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView
)

from server.models import Text
from .serializers import TextSerializer

class TextListView(ListAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

class TextDetailView(RetrieveAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

class TextCreateView(CreateAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

class TextUpdateView(UpdateAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer
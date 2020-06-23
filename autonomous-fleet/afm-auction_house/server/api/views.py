from rest_framework.generics import ListAPIView, RetrieveAPIView

from server.models import Text
from .serializers import TextSerializer

class TextListView(ListAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer

class TextDetailView(RetrieveAPIView):
    queryset = Text.objects.all()
    serializer_class = TextSerializer
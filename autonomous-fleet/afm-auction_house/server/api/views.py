from rest_framework import viewsets

from server.models import Text
from .serializers import TextSerializer
class TextViewSet(viewsets.ModelViewSet):
    serializer_class = TextSerializer
    queryset = Text.objects.all()

# from rest_framework.generics import (
#     ListAPIView,
#     RetrieveAPIView,
#     CreateAPIView,
#     UpdateAPIView
# )

# class TextListView(ListAPIView):
#     queryset = Text.objects.all()
#     serializer_class = TextSerializer

# class TextDetailView(RetrieveAPIView):
#     queryset = Text.objects.all()
#     serializer_class = TextSerializer

# class TextCreateView(CreateAPIView):
#     queryset = Text.objects.all()
#     serializer_class = TextSerializer

# class TextUpdateView(UpdateAPIView):
#     queryset = Text.objects.all()
#     serializer_class = TextSerializer
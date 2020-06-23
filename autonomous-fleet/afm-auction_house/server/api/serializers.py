from rest_framework import serializers

from server.models import Text

class TextSerializer(serializers.ModelSerializer):
    class Meta:
        model = Text
        fields = ('headline', 'body_text', 'pub_date')
from django.contrib import admin
from .models import TransportOrder
from .models import Company

admin.site.register(TransportOrder)
admin.site.register(Company)
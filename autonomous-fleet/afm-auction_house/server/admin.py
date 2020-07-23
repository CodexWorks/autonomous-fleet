from django.contrib import admin
from .models import TransportOrder, Company, Address, AuctionRoom

admin.site.register(TransportOrder)
admin.site.register(Company)
admin.site.register(Address)
admin.site.register(AuctionRoom)

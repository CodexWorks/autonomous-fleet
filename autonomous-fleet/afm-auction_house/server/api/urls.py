from rest_framework.routers import DefaultRouter
from server.api.views import (
    TransportOrderViewSet, 
    CompanyViewSet, 
    AddressViewSet, 
    AuctionRoomViewSet
)

router = DefaultRouter()
router.register(r'transport-order', TransportOrderViewSet, basename='transport_order')
router.register(r'company', CompanyViewSet, basename='company')
router.register(r'address', AddressViewSet, basename='address')
router.register(r'auction-room', AuctionRoomViewSet, basename='auction_rooms')
urlpatterns = router.urls   
  
   
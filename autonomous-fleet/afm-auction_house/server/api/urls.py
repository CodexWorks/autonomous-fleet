from server.api.views import TransportOrderViewSet
from server.api.views import CompanyViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'transportorders', TransportOrderViewSet, basename='transport_order')
router.register(r'company', CompanyViewSet, basename='company')
urlpatterns = router.urls   
  
   
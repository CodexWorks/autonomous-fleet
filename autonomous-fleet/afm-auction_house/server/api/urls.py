from server.api.views import TransportOrderViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TransportOrderViewSet, basename='transport_order')
urlpatterns = router.urls
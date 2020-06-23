from server.api.views import TextViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', TextViewSet, basename='texts')
urlpatterns = router.urls


# from django.urls import path

# from .views import (
#     TextListView,
#     TextDetailView,
#     TextCreateView,
#     TextUpdateView)

# urlpatterns = [
#     path('', TextListView.as_view()),
#     path('create/', TextCreateView.as_view()),
#     path('<pk>/update/', TextUpdateView.as_view()),
#     path('<pk>', TextDetailView.as_view())
# ]
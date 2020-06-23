from django.urls import path

from .views import (
    TextListView,
    TextDetailView,
    TextCreateView,
    TextUpdateView)

urlpatterns = [
    path('', TextListView.as_view()),
    path('create/', TextCreateView.as_view()),
    path('<pk>/update/', TextUpdateView.as_view()),
    path('<pk>', TextDetailView.as_view())
]
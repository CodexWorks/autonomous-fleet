from django.urls import path

from .views import TextListView, TextDetailView

urlpatterns = [
    path('', TextListView.as_view()),
    path('<pk>', TextDetailView.as_view())

]
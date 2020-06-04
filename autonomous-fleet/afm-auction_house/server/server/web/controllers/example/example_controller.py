
from django.http import JsonResponse

def get_auction_house(request):
  return JsonResponse({'response_text':'This is auction house module.'})
#python manage.py runserver 5001

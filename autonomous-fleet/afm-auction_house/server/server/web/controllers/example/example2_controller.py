from django.http import JsonResponse
from django.views import View

class ExampleController2(View):
  def get_auction_house2(self):
    return JsonResponse({'response_text':'This is auction house module2.'})



from django.http import JsonResponse

def get_logistics_erp(request):
  return JsonResponse({'response_text':'This is logistics erp module.'})
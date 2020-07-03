from django.http import HttpResponse


def get_text(request):
    return HttpResponse("Test text." )
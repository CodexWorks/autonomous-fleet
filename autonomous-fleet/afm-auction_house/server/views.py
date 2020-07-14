from django.http import HttpResponse

from django.contrib.auth.decorators import login_required
from django.shortcuts import render

def get_text(request):
    return HttpResponse("Test text." )

@login_required(login_url='/api')
def secure(request):
    user = request.user
    # return render(request, '/login', {'email': user.email})
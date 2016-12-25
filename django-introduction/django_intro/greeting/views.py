from django.shortcuts import render
from greeting.models import Greeting

# Create your views here.

def index(request):
    if request.method == 'POST':
        greeting = request.POST['greeting']
        if Greeting.objects.filter(title=greeting).count() == 0:
            greeting_object = Greeting(title=greeting)
            greeting_object.save()
    return render(request, 'greeting/index.html', context={
        'greetings': Greeting.objects.all()
    })
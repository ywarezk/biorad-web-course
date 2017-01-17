from django.shortcuts import render

def index(request):
    return render(request, template_name='todo_angular2/index.html')

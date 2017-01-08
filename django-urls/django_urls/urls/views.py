from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Post

# Create your views here.

def list(request):
    return render(request, template_name='urls/blog.html', context={
        'my_pokemon': request.GET.get('pokemon', 'squirtle'),
        'strength': request.GET.get('strength', 40)
    })

def detail(request, slug=None, id=1):
    post = get_object_or_404(Post, id=id)
    return HttpResponse(content='<h1>Hello detail page found: %s</h1>' % post.title)
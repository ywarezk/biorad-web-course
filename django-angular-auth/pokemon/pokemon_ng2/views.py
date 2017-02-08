from django.shortcuts import render

def serve_ng2(request):
    return render(request, 'pokemon_ng2/index.html')

from django.shortcuts import render
import datetime

# Create your views here.
def index(request):
    return render(request, template_name='template_intro/child.html', context={
        'my_number': 10,
        'my_pokemon': 'pikachu',
        'my_dict': {'message': 'hello from dict'},
        'my_func': lambda : 'hello world from function',
        'message': 'this will be printed in footer',
        'is_show_additional_info': False,
        'my_date': datetime.datetime.now(),
        'my_float': 3.14159,
        'my_search_list': [
            'bio',
            'rad',
            'hello',
            'world',
            'foo',
            'bar',
            'go',
            'pokemon'
        ],
        'my_search_string': request.GET.get('search', '')
    })
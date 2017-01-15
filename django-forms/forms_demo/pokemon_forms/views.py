from django.shortcuts import render
from pokemon_forms.forms import PokemonForm, PokemonModelForm
from pokemon_forms.models import Pokemon
from django.http import HttpResponse

# Create your views here.
def index(request):
    if request.method == 'POST':
        # do stuff related to form submit
        # form = PokemonForm(request.POST)
        # if form.is_valid():
        #     Pokemon.objects.create(
        #         name=form.cleaned_data['name'],
        #         strength=form.cleaned_data['strength'],
        #         date_added=form.cleaned_data['date_added']
        #     )
        #     return render(request, template_name='pokemon_forms/index.html', context={
        #         'pokemon_form': PokemonForm(),
        #         'status': 'Great Success!!!'
        #     })
        # return render(request, template_name='pokemon_forms/index.html', context={
        #     'pokemon_form': form
        # })

        form = PokemonModelForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse(content='Great Success!!')
        return render(request, template_name='pokemon_forms/index.html', context={
            'pokemon_form': PokemonForm(),
            'pokemon_model_form': form
        })
    if request.method == 'GET':
        return render(request, template_name='pokemon_forms/index.html', context={
            'pokemon_form': PokemonForm(),
            'pokemon_model_form': PokemonModelForm()
        })
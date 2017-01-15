from django.contrib import admin
from pokemon.models import Pokemon
from django.conf.urls import url
from django.http import HttpResponse

class PokemonAdmin(admin.ModelAdmin):
    list_display = ('name', 'strength', 'date_added')
    list_filter = list_display
    search_fields = ('name', )
    add_form_template = 'pokemon/change_form.html'

    def get_urls(self):
        urlpatterns = super(PokemonAdmin, self).get_urls()
        return [
            url(r'^create-with-csv/$', admin.site.admin_view(self.create_with_csv), name='create_with_csv')
               ] + urlpatterns

    def create_with_csv(self, request):
        file = request.FILES['csv']
        import csv
        spamreader = csv.reader(file, delimiter=',')
        pokemons = []
        is_title_row = True
        for row in spamreader:
            if is_title_row:
                is_title_row = False
                continue
            pokemons.append(
                Pokemon(
                    name=row[0],
                    strength=row[1],
                    date_added=row[2]
                )
            )
        Pokemon.objects.bulk_create(pokemons)
        return HttpResponse(content='Success')



admin.site.register(Pokemon, PokemonAdmin)
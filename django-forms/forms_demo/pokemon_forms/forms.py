from django.forms import forms, fields, DateField, widgets, ModelForm
from pokemon_forms.models import Pokemon

class PokemonForm(forms.Form):
    name = fields.CharField(
        widget=widgets.Textarea(attrs={'class': 'form-control'}),
        required=True,
        max_length=50,
        label='Pokemon Name:',
        help_text='put the pokemon name')
    strength = fields.IntegerField(required=True, max_value=100, min_value=0)
    #gender = fields.ChoiceField(choices=((1, 'male'), (2, 'female')))
    date_added = fields.DateField(widget=fields.DateTimeInput)

class PokemonModelForm(ModelForm):
    class Meta:
        model = Pokemon
        exclude = ()
        widgets = {
            'name': widgets.TextInput(attrs={'class': 'form-control', 'placeholder': 'NAME!!!'})
        }



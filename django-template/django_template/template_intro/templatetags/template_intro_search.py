from django.template import Library

register = Library()

@register.inclusion_tag(filename='template_intro/search.html')
def search(list, search_string):
    return {
        'list': [item for item in list if item.find(search_string) != -1]
    }
from django.template import Library

register = Library()

def substring(value, format):
    start_index = int(format.split(':')[0])
    end_index = int(format.split(':')[1])
    return value[start_index:end_index].upper()

register.filter(name='substring', filter_func=substring)
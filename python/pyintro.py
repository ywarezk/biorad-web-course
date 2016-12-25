"""
Python introduction
"""

# variable declaration

my_number = 10
my_string = 'hello world'
my_boolean = True
my_float = 1.5

## operator

### power

my_number ** 2

# multiply string

my_string * 3


# Strings

my_string1 = 'hello world""'
my_string2 = "foo bar ' '"
my_string3 = """
    multiline
    lsadpflkasdjf
    okjshfgokjahs
"""

print "my string is: %s my number is: %d" % (my_string1, my_number)

my_string1[-3:]
len(my_string)

# list

my_list = []
my_list.append('hello world')
my_list.append(5)
my_list.append(['foo bar'])
my_list.append([10])

## access list vars

my_list[0]
my_list[2:4]
my_list[0:4:2]

# dictionary
my_dict = {}
my_dict['hello'] = 'world' #my comment
my_dict['my_array'] = []

#indentation

# use indentation to mark code block

# Conditions

# if expression:
       # code block

my_boolean = True
if my_boolean:
    print 'hello world'
    print 'hello world2'
    print 'hello world3'

print 'hello world4'

if my_boolean:
    print 'hello'
elif my_string == 'hello world':
    print 'wat'
else:
    print 'world'

if not my_boolean and my_string == 'hello world':
    print 'another if'

# loops

# for <var name> in <iterable list>:
#       code block

# while <expression>
#      code block

# functions

# def <function name>(arg1=<default value>, arg2=<default value>)

# <function name>(<first value>, <second value>)
# <function name>(arg2=<my value>)

# class

# class <class name>(object):

#from pokemon import my_string_pokemon
#import pokemon as PokemonFile
import pokemon

#pikachu = pokemon.Pokemon('pikachu')
#pikachu.say_hello()

dora = pokemon.Dora()


# lambda functions

my_lambda = lambda x,y: x*y

def multiply(x,y):
    return x*y

my_lambda()



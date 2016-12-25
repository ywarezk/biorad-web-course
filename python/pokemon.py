

class Pokemon(object):
    """
    this class created a new pokemon
    GO Pokemon!!!
    """

    name = None

    def __init__(self, name = 'pikachu'):
        self.name = name

    def say_hello(self):
        """
        this function prints hello world
        :return:
        """

        print '%s said hello' % self.name


class Pikachu(Pokemon):

    power = 10

    def __init__(self):
        super(Pikachu, self).__init__()


class Squirtle(Pokemon):
    power = 10

    def __init__(self):
        super(Squirtle, self).__init__()

class Dora(Pikachu, Squirtle):

    def __init__(self):
          super(Dora, self).__init__()


my_string_pokemon = 'hello pokemon'


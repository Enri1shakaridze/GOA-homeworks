class Cat:
    def __init__(self, name):
        self.name = name

    def get(self):
        print(self.name)
        return self.name


name = Cat('Garfild')

Cat.get(name)
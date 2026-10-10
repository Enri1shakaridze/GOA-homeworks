class Car:
    def __init__(self, Brand, Model, Color, Horsepower):
        self.Brand = Brand
        self.Model = Model
        self.Color = Color
        self.Horsepower = Horsepower

    def Display_brand(self):
        print(f"{self.Brand} Brand")
    def display_model(self):
        print(f"{self.Model} Model")
    def display_color_and_HP(self):
        print(f"{self.Color} Color, {self.Horsepower} Hp")

car1 = Car('Mercedes', 'CLS63', 'white', '777')
car1.Display_brand()
car1.display_model()
car1.display_color_and_HP()
car1.Brand
car1.Model
car1.Color
car1.Horsepower
car2 = Car('BMW', 'E60', 'white', '666')
car2.Brand
car2.Model
car2.Color
car2.Horsepower
car2.Display_brand()
car2.display_model()
car2.display_color_and_HP()
# შექმენით Car კლასი. გადაეცით თვისებები: brand, model, color, horsePower.
# შექმენით მეთოდები: display_brand(), display_model() და display_color_and_HP().

# შექმენით მინიმუმ ორი ონსტანცია და ორივე მათგანიდან გამოიტანეთ ტერმინალში მათი თვისებებიც და მეთოდებიც 
# 2) შექმენით კლასი Vehicle. გადაეცით თვისებები: color, year, model.
# Vehicle-ს ჰყავდეს 2 Child: Motorcycle და Bike. Inheritence-ის მეშვეობით მიაწოდეთ იგივე თვისებები და გამოიტანეთ თითოეული ტერმინალში.

class Vehicle:
    def __init__(self, color, year, model):
        self.color = color
        self.year = year
        self.model = model

class Motorcycle(Vehicle):
    pass

class Bike(Vehicle):
    pass

Motorcycle1 = Motorcycle('white', 2018, 'yamaha')

bike1 = Bike('black', 2025, 'random')
print(bike1.color)
print(bike1.year)
print(bike1.model)
print(Motorcycle1.color)
print(Motorcycle1.year)
print(Motorcycle1.model)






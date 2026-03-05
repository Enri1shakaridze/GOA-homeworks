# 2) სქემატურად (ნახაზის) სახით ახსენით რას ეწოდება Multi-level და Multiple-level Inheritence

# multiple inheritence როდესაც ერთ კლასს გადაეცემა 2 ან მეტი მშობელი კლასი ანუ სინტაქსი:
# dad, mom => child

# multilevel inheritence როდესაც შვილ კლასს ყავს მშობელი კლასი და მშობელ კლასებსაც ყავს თავიანთი მშობელი კლასი სინტაქსი:
# grandpha => father => boy და ა.შ.

# 3) საკლასო დავალებაში რა მაგალითებიც მოიყვანეთ - აბსოლიტურად ყველაზე შექმენით კლასი, სადაც გამოიყენებთ Inheritence-ის თითოეულ სახეს.

# multi-level inheritence

class Car:
    def __init__(self, brand, year, model):
        self.brand = brand
        self.year = year
        self.model = model

    def carGo(self):
        return f'{self.year} {self.brand} is going'
    
    def carStop(self):
        return f'{self.year} {self.brand} stopped'


class Sedan(Car):
    def carSedan(self):
        return f'This car {self.model} is a sedan'


class Electric(Sedan):
    def electricSedan(self):
        return f'This sedan {self.model} is electric'



car1 = Electric("Tesla", 2023, "Model S")

print(car1.carGo())
print(car1.carSedan())
print(car1.electricSedan())
print('')


# multiple inheritence

# პირველი მშობელი
class Car:
    def __init__(self, brand):
        self.brand = brand

    def drive(self):
        return f"{self.brand} is driving"


# მეორე მშობელი
class Electric:
    def __init__(self, battery):
        self.battery = battery

    def charge(self):
        return f"Battery level: {self.battery}%"



class ElectricCar(Car, Electric):
    def __init__(self, brand, battery):
        Car.__init__(self, brand)
        Electric.__init__(self, battery)

    def info(self):
        return f"{self.brand} | Battery: {self.battery}%"


car1 = ElectricCar("Tesla", 85)

print(car1.drive())
print(car1.charge())
print(car1.info())

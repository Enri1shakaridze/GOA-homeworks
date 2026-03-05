# 2) ახსენით თუ რას ნიშნავს კლასის კონსტრუქტორი. მოიძიეთ ფოტოები რომლებიც ზუსტად აღწერს კონსტრუქტორის მნიშვნელობას/დანიშნულებას.

# კონსტრუქტორის დახმარებით პარამეტრებს ვამატებთ ობიექტებში მაგ. name, age, surename მაგრამ მანამდე აუცილებლად ვწერთ self ს რადგან პითონს ვეუბნებით ამ კლასში name იყოს name

# 3) ახსენით თუ რას ნიშნავს Class Inheritence.

# Inheritance ნიშნავს რომ შვილი კლასი იღებს მშობელი კლასის ყველა თვისებასა და მეთოდს, და შეუძლია ახლებიც დაამატოს. ეს გვარიდებს კოდის გამეორებას.

# 4) შექმენით მშობელი კლასი Employee, რომელსაც მისცემთ თვისებებს name და salary.  ასევე, გაუწერეთ get_salary მეთოდი, რომელიც ბეჭდავს მომუშავის ანაზღაურებას.

class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def get_salary(self):
        print(f'the user salary is {self.salary}')


Employee1 = Employee('jemala', 500)
Employee1.get_salary()

#  შექმენით შვილი კლასი Manager, რომელსაც მემკვიდრეობით გადასცემთ Employee-ს თვისებებს.  დამატებით გაუწერეთ bonus_salary მეთოდი, რომელიც salary-ს უმატებს 20%-ს.

class Manager(Employee):
    def bonus_salary(self):
        print(self.salary + (self.salary * 0.20))

Employee1 = Manager('jemala', 500)
Employee1.bonus_salary()

# 5) შექმენით მშობელი კლასი Vehicle. მიეცით მას თვისებები: brand, year, color, horsePower. მშობელ კლასში დაამატეთ drive() მეთოდი, რომელიც დაბეჭდავს '{color} {brand} is going'. ასევე შექმენით stop() მეთოდი, რომელიც დაბეჭდავს '{color} {brand} is stopping'. 

class Vehicle:
    def __init__(self, brand, year, color, horsepower):
        self.brand = brand
        self.year = year
        self.color = color
        self.horsepower = horsepower
    def drive(self):
        print(f'{self.color} {self.brand} is going')

    def stop(self):
        print(f'{self.color} {self.brand} is stopping')

Vehicle1 = Vehicle('mercedes', 2017, 'black', 777)
Vehicle1.drive()
Vehicle1.stop()

# შექმენით child კლასები: Car, Motorcycle, Bike. გადაეცით შვილ კლასებს მშობლის თვისებები და მეთოდები. ამასთანავე თქვენი ფანტაზიით მოიფიქრეთ და დაამატეთ სხვადასხვა მეთოდები შვილ კლასებში.

class Car(Vehicle):
    def car_turbo(self):
        print(f'{self.brand} activated turbo')

class Motorcycle(Vehicle):
    def wheelie(self):
        print(f'{self.brand} does a wheelie!')

    def rev_engine(self):
        print(f'{self.brand} goes: VROOOOM!')


class Bike(Vehicle):
    def ring_bell(self):
        print(f'{self.color} bike goes: RING RING!')


Car1 = Car('bmw', 2020, 'white', 999)
Car1.drive()
Car1.car_turbo()
Car1.stop()
print('')

motorcycle1 = Motorcycle('bmw', 2024, 'black', 1200)
motorcycle1.drive()
motorcycle1.wheelie()
motorcycle1.rev_engine()
motorcycle1.stop()
print('')

bike1 = Bike('ველოსიპედი😁', 2027, 'grey', 0)
bike1.drive()
bike1.ring_bell()
bike1.stop()

# 6) მოიძიეთ თუ რას ნიშნავს Multiple Level Inheritence და Multi Level Inheritance.
# ეს ორი სხვადასხვა ცნებაა:
# Multilevel Inheritance (მრავალსაფეხურიანი) — ჯაჭვი: ბაბუა → მამა → შვილი. თითოეული კლასი მემკვიდრეობს ერთი კლასისგან.

class Animal:          # ბაბუა
    pass
class Dog(Animal):     # მამა
    pass
class Puppy(Dog):      # შვილი — იღებს Dog-ისა და Animal-ის ყველაფერს
    pass


# Multiple Inheritance (მრავლობითი) — ერთი შვილი ორი ან მეტი მშობლისგან მემკვიდრეობს ერთდროულად.

class Father:
    def work(self):
        print("მამა მუშაობს")

class Mother:
    def cook(self):
        print("დედა ამზადებს")

class Child(Father, Mother):  # ორი მშობელი
    pass

c = Child()
c.work()   # მამისგან
c.cook()   # დედისგან

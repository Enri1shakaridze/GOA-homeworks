# 1)შექმენით საბაზო კლასი ⁠Animal⁠, რომელსაც ექნება მეთოდი ⁠speak()⁠, რომელიც ბეჭდავს „ცხოველი გამოსცემს ხმას“. შემდეგ შექმენით მისგან მემკვიდრეობით მიღებული კლასი ⁠Dog⁠, რომელიც გადაფარავს ამ მეთოდს და დაბეჭდავს „ძაღლი ყეფს“. ბოლოს შექმენით კლასი ⁠Puppy⁠, რომელიც მემკვიდრეობით მიიღებს ⁠Dog⁠ კლასს და გადაფარავს მეთოდს ისე, რომ დაბეჭდავს „ლეკვი წკმუტუნებს“. შექმენით ⁠Puppy⁠ კლასის ობიექტი და გამოიძახეთ მისი ⁠speak()⁠ მეთოდი.

class Animal:
    def speak(self):
        return 'ცხოველი გამოსცემს ხმას'


class Dog(Animal):
    def speak(self):
        return 'ძაღლი ყეფს'

class Puppy(Dog):
    def speak(self):
        return 'ლეკვი წკმუტუნებს'

pupy1 = Puppy()
print(pupy1.speak())

# 2) დაწერეთ პროგრამა, სადაც გექნებათ საბაზო კლასი ⁠Person⁠ ატრიბუტებით ⁠name⁠ და ⁠age⁠. ამ კლასისგან მემკვიდრეობით შექმენით კლასი ⁠Employee⁠, რომელსაც ექნება დამატებითი ატრიბუტი ⁠employee_id⁠. შემდეგ ⁠Employee⁠ კლასისგან მემკვიდრეობით შექმენით კლასი ⁠Manager⁠, რომელსაც ექნება დამატებითი ატრიბუტი ⁠department⁠. შექმენით ⁠Manager⁠ კლასის ობიექტი, გადაეცით ყველა საჭირო არგუმენტი და დაბეჭდეთ მისი ყველა მონაცემი.

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Employee(Person):
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)
        self.employee_id = employee_id

class Manager(Employee):
    def __init__(self, name, age, employee_id, department):
        super().__init__(name, age, employee_id)
        self.departament = department

man1 = Manager('Enrike', 15, 1, 'random')
print(man1.name)
print(man1.age)
print(man1.employee_id)
print(man1.departament)
# 3) შექმენით კლასების იერარქია:პირველი არის კლასი ⁠Device⁠ მეთოდით ⁠power_on()⁠, რომელიც აცხადებს, რომ მოწყობილობა ჩაირთო. მეორე არის ⁠Computer⁠, რომელიც მემკვიდრეობით იღებს ⁠Device⁠-ს და ამატებს მეთოდს ⁠boot_os()⁠. მესამე არის ⁠Laptop⁠, რომელიც მემკვიდრეობით იღებს ⁠Computer⁠-ს და ამატებს მეთოდს ⁠open_lid()⁠. შექმენით ⁠Laptop⁠ ობიექტი და თანმიმდევრულად გამოიძახეთ სამივე მეთოდი.
class Device:
    def power_on(self):
        return 'power on'
class Computer(Device):
    def boot_as(self):
        return 'boot as system'
class Laptop(Computer):
    def open_lid(self):
        return 'open'
lap1 = Laptop()
print(lap1.power_on())
print(lap1.boot_as())
print(lap1.open_lid())
# 4) შექმენით კლასი ⁠Vehicle⁠, რომელსაც ექნება ატრიბუტი ⁠brand⁠. მისგან მემკვიდრეობით შექმენით კლასი ⁠Car⁠, რომელიც დაამატებს ატრიბუტს ⁠doors⁠. ბოლოს ⁠Car⁠ კლასის ბაზაზე შექმენით კლასი ⁠ElectricCar⁠, რომელიც დაამატებს ატრიბუტს ⁠battery_capacity⁠. შექმენით ⁠ElectricCar⁠ კლასის ინსტანცია, რომელიც გამოიყენებს მრავალდონიანი მემკვიდრეობის (multilevel) პრინციპს და დაბეჭდეთ მისი თითოეული ატრიბუტი.
class Vehicle:
    def __init__(self, brand):
        self.brand = brand
class Car(Vehicle):
    def __init__(self, brand, doors):
        super().__init__(brand)
        self.doors = doors
class ElectricCar(Car):
    def __init__(self, brand, doors, battery_capacity):
        super().__init__(brand, doors)
        self.battery_capacity = battery_capacity
elect = ElectricCar('tesla', 4, 100)
print(elect.brand)
print(elect.doors)
print(elect.battery_capacity)
# 5) შექმენით კლასი ⁠Shape⁠, რომელსაც ექნება მეთოდი ⁠description()⁠, რომელიც აბრუნებს ტექსტს „ზოგადი გეომეტრიული ფიგურა“. მისგან მემკვიდრეობით შექმენით კლასი ⁠Polygon⁠, რომელიც შეცვლის ამ მეთოდს და დააბრუნებს „მრავალკუთხედი“. ბოლოს შექმენით კლასი ⁠Triangle⁠, რომელიც მემკვიდრეობით მიიღებს ⁠Polygon⁠ კლასს და მეთოდს გადაფარავს ტექსტით „სამკუთხედი“. გამოიძახეთ ⁠Triangle⁠ კლასის ობიექტის მეთოდი და დაბეჭდეთ შედეგი
class Shape:
    def Description(self):
        return 'ზოგადი გეომეტრიული ფიგურა'
class Polygon(Shape):
    def Description(self):
        return 'მრავალკუთხედი'
class Triangle(Polygon):
    def Description(self):
        return 'სამკუთხედი'
tr = Triangle()
print(tr.Description())
# 6) შექმენით ორი საბაზო კლასი: ⁠Flyer⁠, რომელსაც ექნება მეთოდი ⁠fly()⁠, და ⁠Swimmer⁠, რომელსაც ექნება მეთოდი ⁠swim()⁠. შემდეგ შექმენით კლასი ⁠Duck⁠, რომელიც ერთდროულად მიიღებს მემკვიდრეობას ⁠Flyer⁠ და ⁠Swimmer⁠ კლასებიდან. შექმენით ⁠Duck⁠ კლასის ობიექტი და გამოიძახეთ ორივე მეთოდი.

class Flyer:
    def fly(self):
        return 'fly'
class Swimmer:
    def swim(self):
        return 'swim'
class Duck(Flyer, Swimmer):
    pass
Dc = Duck()
print(Dc.fly())
print(Dc.swim())


# 7) დაწერეთ პროგრამა, სადაც გექნებათ კლასი ⁠Writer⁠ მეთოდით ⁠write_text()⁠, რომელიც ბეჭდავს „ტექსტის წერა“, და კლასი ⁠Speaker⁠ მეთოდით ⁠speak_text()⁠, რომელიც ბეჭდავს „ტექსტის საუბარი“. შექმენით ახალი კლასი ⁠Author⁠, რომელიც მემკვიდრეობით მიიღებს როგორც ⁠Writer⁠, ისე ⁠Speaker⁠ კლასებს. შექმენით ⁠Author⁠ კლასის ობიექტი და გამოიძახეთ მისი ორივე მშობელი კლასის მეთოდი.
class Writer:
    def write_text(self):
        return 'ტექსტის წერა'
class Speaker:
    def speak_text(self):
        return 'ტექსტის საუბარი'
class Author(Writer, Speaker):
    pass
aut = Author()
print(aut.write_text())
print(aut.speak_text())
# 8) შექმენით ორი კლასი: ⁠Engine⁠, რომელსაც ექნება კონსტრუქტორი ⁠hp⁠ ატრიბუტით, და ⁠Body⁠, რომელსაც ექნება კონსტრუქტორი ⁠material⁠ ატრიბუტით. შექმენით მესამე კლასი ⁠SportCar⁠, რომელიც მემკვიდრეობით მიიღებს როგორც ⁠Engine⁠, ისე ⁠Body⁠ კლასებს და თავის მხრივ მიიღებს ორივე პარამეტრს ⁠__init__⁠ მეთოდში ⁠super()⁠ გამოყენებით ან პირდაპირი გამოძახებით. შექმენით ⁠SportCar⁠ ობიექტი და დაბეჭდეთ მისი სიმძლავრე და მასალის ტიპი.
class Engine:
    def __init__(self, hp):
        self.hp = hp
class Body:
    def __init__(self, material):
        self.material = material
class SportCar(Engine, Body):
    def __init__(self, hp, material):
        super().__init__(hp)
        Body.__init__(self, material)
sp = SportCar(1200, 'titanium')
print(sp.hp)
print(sp.material)
# 9)განსაზღვრეთ კლასი ⁠Worker⁠, რომელსაც ექნება მეთოდი ⁠work()⁠, რომელიც ბეჭდავს „მუშაობს“, და კლასი ⁠Singer⁠, რომელსაც ექნება მეთოდი ⁠sing()⁠, რომელიც ბეჭდავს „მღერის“. შექმენით კლასი ⁠MusicianWorker⁠, რომელიც იყენებს მრავალმხრივ (multiple) მემკვიდრეობას და ორივე კლასის ფუნქციონალს აერთიანებს. შექმენით ამ კლასის ობიექტი და შეამოწმეთ მისი მეთოდები.
class Worker:
    def work(self):
        return 'მუშაობს'
class Singer:
    def sing(self):
        return 'მღერის'
class MusicianWroker(Worker, Singer):
    pass
Mus1 = MusicianWroker()
print(Mus1.work())
print(Mus1.sing())
# 10)შექმენით მრავალმხრივი (multiple) მემკვიდრეობის მაგალითი თამაშის პერსონაჟისთვის. გექნებათ საბაზო კლასი ⁠Attacker⁠ მეთოდით ⁠attack()⁠, და მეორე საბაზო კლასი ⁠Defender⁠ მეთოდით ⁠defend()⁠. შექმენით კლასი ⁠Character⁠, რომელიც მემკვიდრეობით მიიღებს ორივეს და დაამატებს საკუთარ მეთოდს ⁠move()⁠. შექმენით ⁠Character⁠ ობიექტი და გამოიძახეთ სამივე მეთოდი თანმიმდევრულად.

class Attaker:
    def attack(self):
        return 'attack'
class Defender:
    def defender(self):
        return 'def'
class Character(Attaker, Defender):
    def move(self):
        return 'move'
ch = Character()
print(ch.attack())
print(ch.defender())
print(ch.move())
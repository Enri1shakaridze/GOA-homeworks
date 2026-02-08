# 2) შექმენით კლასი Person, რომელსაც ექნება თვისებები name და age. შექმენით მეთოდი introduce(), რომელიც დაბეჭდავს:
#  "Hello, my name is {name} and I am {age} years old"

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f"Hello, my name is {self.name} and I am {self.age} years old"

person1 = Person('enrike', 15)
print(f'სახელი {person1.name}')
print(f'წლოვანება {person1.age}')
print(person1.introduce())
print('')

# 3) შექმენით კლასი Rectangle, რომელსაც ექნება თვისებები width და height.  ასევე შექმენით მეთოდები area() და perimeter() რომლებიც გამოითვლის მართკუთხედის პერიმეტრსა და ფართობს.

class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height
    
    def perimeter(self):
        return 2 * self.width * self.height
    
Rectangle1 = Rectangle(10, 5)
print(Rectangle1.width)
print(Rectangle1.height)
print(f'პერიმეტრი {Rectangle1.perimeter()}')
print(f'ფართობი {Rectangle1.area()}')
print('')

# 4) შექმენით კლასი Product და დაამატეთ თვისებები price და quantity. დაამატეთ მეთოდი:
# total_value() → price × quantity

class Product:
    def __init__(self, price, quantity):
        self.price = price
        self.quantity = quantity

    def total_value(self):
        return self.price * self.quantity
product1 = Product(20, 5)

print(f'total value {product1.total_value()}')
print('')

# ასევე კლასის გამოყენებით შექმენით პროდუქტების სია და:
# • იპოვეთ ყველაზე ძვირი პროდუქტი
# • იპოვეთ ყველაზე იაფი პროდუქტი

product2 = Product(100, 2)
product3 = Product(50, 9)
product4 = Product(90, 1)
product5 = Product(25, 10)
product6 = Product(50, 19)
price_up = [product1.price, product2.price, product3.price, product4.price, product5.price, product6.price]
print(f'ყველაზე ძვირი პროდუქტი {max(price_up)}$')
print(f'ყველაზე იაფი პროდუქტი {min(price_up)}$')

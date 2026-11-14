# 3) შექმენი კლასი Student, რომელსაც ექნება ატრიბუტები name და age. შექმენი კლასის ცვლადი total_students = 0. ყოველ ჯერზე, როდესაც ახალი სტუდენტი შეიქმნება (__init__), total_students უნდა გაიზარდოს 1-ით.
class student:
    total_student = 0
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.func()

    @classmethod
    def func(cls):
        cls.total_student += 1

st1 = student('enrike', 15)
st2 = student('enrike2', 16)
print(st1.total_student)

# 4) შექმენი კლასი Book ატრიბუტებით: title, author, year. დაწერე @classmethod სახელად from_string, რომელიც მიიღებს სტრიქონს ფორმატით: "Title - Author - Year" (მაგალითად: "1984 - George Orwell - 1949"), დაშლის მას და დააბრუნებს Book კლასის ახალ ობიექტს.
class Book:
    def __init__(self, title, author, year):
        self.author = author
        self.title = title
        self.year = year

    @classmethod
    def form_string(cls, text):
        text = text.split('-')
        author = text[1].strip()
        title = text[0].strip()
        year = text[2].strip()

        return author, title, year

books = Book.form_string('Can`t hurt me - david goggins - 2013')
print(books[0])
print(books[1])
print(books[2])
# 5) შექმენი კლასი Temperature, რომლის __init__ ინახავს ტემპერატურას ცელსიუსში (celsius).
# დაწერე @classmethod სახელად from_fahrenheit(cls, fahrenheit), რომელიც მიიღებს ტემპერატურას ფარენჰეიტში, გადაიყვანს ცელსიუსში (C = (F - 32) * 5/9) და დააბრუნებს Temperature-ის ახალ ობიექტს.
class Temp:
    def __init__(self, celsius):
        self.celsius = celsius

    @classmethod
    def form_fah(cls, fahreneit):
        C = (fahreneit - 32) * 5/9
        return C
cels = Temp.form_fah(100)
print(cels)
# 6) ექმენი კლასი Product ატრიბუტებით name და price.
# კლასს ჰქონდეს ცვლადი discount_rate = 0.0 (0%).
# დაწერე @classmethod სახელად set_discount_rate(cls, new_rate), რომელიც შეცვლის ფასდაკლების პროცენტს ყველა პროდუქტისთვის.
# დაწერე ობიექტის მეთოდი get_discounted_price(), რომელიც დააბრუნებს ფასს ფასდაკლების გათვალისწინებით.

class Product:
    disc = 0
    def __init__(self, name, price):
        self.name = name
        self.price = price
    @classmethod
    def set_discount_rate(cls, newr):
        cls.disc = newr
    
    def getdiscpr(cls):
        return cls.price * (1 - cls.disc / 100)
    
product2 = Product("Phone", 1000)
Product.set_discount_rate(20)
print(product2.getdiscpr())

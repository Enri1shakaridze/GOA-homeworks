# 2) შექმენით Person კლასი (name, age).
# შემდეგ შექმენით Student კლასი, რომელიც ამატებს grade-ს და super()-ით ინიციალიზაციას აკეთებს.

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade


# 3) შექმენით Employee კლასი (name, salary).
# შემდეგ შექმენით Manager კლასი, რომელიც მშობელ კლასს დაუმატებს department კუთვნილებას და super()-ით იღებს დანარჩენ კუთვნილებებს.

class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, department):
        super().__init__(name, salary)
        self.department = department


# 4) შექმენით Shape კლასი area() მეთოდით რომელიც დააბრუნებს საწყისად 0-ს (return 0).
# შემდეგ შექმენით Rectangle კლასი (width, height), რომელიც super()-ს გამოიყენებს და მოახდენს area() მეთოდის override-ს.

class Shape:
    def area(self):
        return 0

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        super().area
        return self.width * self.height

# 5) შექმენი User კლასი (username, email).
# შექმენი Admin კლასი, რომელიც ამატებს role-ს და super()-ით იძახებს მშობლის კონსტრუქტორს.

class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email

class Admin(User):
    def __init__(self, username, email, role):
        super().__init__(username, email)
        self.role = role

# 6) შექმენი Book კლასი (title, author).
# შემდეგ EBook კლასი (file_size), რომელიც super()-ით იძახებს მშობლის კონსტრუქტორს და ამატებს ახალ ატრიბუტს.

class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

class Ebook(Book):
    def __init__(self, title, author, file_size):
        super().__init__(title, author)
        self.file_size = file_size

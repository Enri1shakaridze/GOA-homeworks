#ფუნქციები გვეხმარება კოდის ორგანიზებაში და თავიდან გვარიდებს ერთი და იმავე კოდის ბევჯერ წერის საჭიროებას.ფუნქციების გამოყენება გვაძლევს საშუალებას, კოდი გავხადოთ უფრო მარტივი, გასაგები და ხელახლა გამოსაყენებადი.


def name_age(name, age):
    return f"user name {name} user age {age}"
print(name_age("enrike", 14))



def num1(x):
    return x ** 2
print(num1(5))


def numbers(x, y):
    return x ** y
print(numbers(5, 5))


def double_values(list):
    return list * 2
print(double_values(["enrike", "lika", "sandro"]))



def sum(x, y, p):
    return x + y + p
print(sum(5, 10, 20))



def substract(x, y):
    return x - y
print(substract(8, 5))



def multiply(x, y):
    return x * y
print(multiply(20, 2))



def divide(x, y):
    return x / y
print(divide(10, 2))
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



def values(list):
    new_list = [i ** 2 for i in list]
    return new_list
print(values([10, 20, 30]))



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
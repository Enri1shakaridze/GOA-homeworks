def even(eve):
    name = 0
    for i in eve:
        if i % 2 == 0:
            name += i
    return name
print(even([1, 2, 3, 4, 5, 6]))

def string(name):
    random = ''
    word = 'aeiou'
    for i in name:
        if i in word:
            random += i
    return random
print(string('enrike'))


def lstn(list):
    new_list = []
    for i in list:
        if i not in new_list:
            new_list.append(i)
    return new_list
print(lstn(['enrike', 'enrike', 'saba', 'temo']))


# 1) დაწერეთ ფუნქცია, რომელსაც გადასცემთ ინტეჯერების სიას არგუმენტად. პასუხად დააბრუნეთ სიაში არსებული რიცხვების საშუალო არითმეტიკული.
def int(integers):
    return sum(integers) / len(integers)
print(int([1, 5, 9, 11]))

# 2) შექმენით ფუნქცია, რომელიც არგუმენტად მიიღებს სტრინგს.
# ფუნქციამ უნდა დაითვალოს მოცემულ სტრინგში ხმოვნების რაოდენობა.

def string(name):
    random = ''
    word = 'aeiou'
    for i in name:
        if i in word:
            random += i
    return len(random)
print(string('enrike'))

# 3) დაწერეთ ფუნქცია და გადაეცით არგუმენტად სია.

# ფუნქციამ სიის თითოეული ელემენტი უნდა დააბრუნოს კვადრატში
def name(list):
    res = []
    for i in list:
        res.append(i ** 2)
    return res
print(name([2, 4, 5, 6, 7]))
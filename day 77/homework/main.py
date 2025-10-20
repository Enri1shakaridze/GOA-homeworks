# 2) დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს რიცხვების სიას და დააბრუნებს მხოლოდ ლუწი რიცხვების ჯამს.

def int(number):
    name = 0
    for i in number:
        if i % 2 == 0:
            name += i
    return name
print(int([1, 2, 3, 4, 5, 6, 7, 8]))

# 3) დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს — ტექსტს და ასოს — და დააბრუნებს, რამდენჯერ გვხვდება ეს ასო ტექსტში ( გაითვალისწინეთ case სენსიტიურობა) 


def two(text, alf):
    name = text.lower()
    return name.count(alf)
print(two('ENRikeee', 'e'))


# 4) დაწერეთ ფუნქცია, რომელიც მიიღებს ორ სიას და დააბრუნებს სიას, სადაც მხოლოდ საერთო ელემენტებია. მაგ:

def two_list(first, second):
    return list(set(first) & set(second))
print(two_list([10, 20, 10, 25], [10, 10, 30, 25]))
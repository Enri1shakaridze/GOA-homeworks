# def sum_of_digits(number):
#     total = 0
#     for i in number:
#         total += i
#     return total

# print(sum_of_digits(256))


# def name(nam):
#     sum = 0 
#     for i in nam:
#         if i == 'e':
#             sum += 1
#     return sum

# print(name('enrike'))

# def len(len):
#     sum = 0
#     for i in len:
#         sum += 1
#     return sum

# print(len([1, 3, 6, 11]))




# 1) დაწერეთ ფუნქცია და გადაეცით მას ორი რიცხვი. პასუხად დააბრუნეთ ის რიცხვი, რომელიც ამ ორი ინტეჯერიდან ყველაზე დიდი იქნება

def number(a, b):
    return max(a, b)
print(number(14, 20))

# 2) შექმენით ფუნქცია, რომელსაც გადასცემთ ინტეჯერების სიას. ფუნქციამ უნდა დააბრუნოს მეორე ყველაზე მცირე ელემენტი.

def listn(int):
    cont = sorted(int)
    return cont[1]

print(listn([1, 2, 5, 11]))

# 3) შექმენით ფუნქცია, რომელსაც გადასცემთ ინტეჯერების სიას. ფუნქციამ უნდა დააბრუნოს მეორე ყველაზე დიდი ელემენტი.

def lists(int):
    cont = sorted(int)
    name = cont[::-1]
    return name[1]

print(lists([1, 2, 5, 11]))

# 4) დაწერეთ ფუნქცია, რომელიც დააბრუნებს True-ს თუ არგუმენტად გადაცემული სტრინგის პირველი და ბოლო ასო ერთმანეთს ემთხვევა

def name(str):
    if str[0] == str[-1]:
        return True
    else:
        return False

print(name('enrike'))
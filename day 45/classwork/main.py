def number_odd(listodd):
    resultt = []
    for i in listodd:
        if i < 0:
            resultt.append(i)
    return resultt

print(number_odd([5, 2, 10, 15]))


def number_even(listeven):
    resultt = []
    for i in listeven:
        if i > 0:
            resultt.append(i)
    return resultt

print(number_even([5, 10, 15, 25]))



def num1(x, y, p):
    resultt = (x ** y) * p
    return resultt
print(num1(10, 20, 5))
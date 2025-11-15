# 1) https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/python

def descending_order(num):
    b = list(str(num))
    d = sorted(b)[::-1]
    c = "".join(d)
    return int(c)

# 2) https://www.codewars.com/kata/5899642f6e1b25935d000161/train/python

def merge_arrays(arr1, arr2):
    return sorted(list(set(arr1) | set(arr2)))

# 3) https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/python.

def divisible_by(numbers, divisor):
    name = []
    for i in numbers:
        if i % divisor == 0:
            name.append(i)
    return name

# 4) https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/python

def between(a,b):
    n = []
    for i in range(a, b + 1):
        n.append(i)
    return n

# 5) https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/python

def switch_it_up(number):
    if number == 0:
        return "Zero"
    elif number == 1:
        return "One"
    elif number == 2:
        return "Two"
    elif number == 3:
        return "Three"
    elif number == 4:
        return "Four"
    elif number == 5:
        return "Five"
    elif number == 6:
        return "Six"
    elif number == 7:
        return "Seven"
    elif number == 8:
        return "Eight"
    elif number == 9:
        return "Nine"
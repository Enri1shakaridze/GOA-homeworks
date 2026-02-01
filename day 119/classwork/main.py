
# 1) https://www.codewars.com/kata/5641a03210e973055a00000d/train/python

def two_decimal_places(n):
    return round(n, 2)

# 2) https://www.codewars.com/kata/554b4ac871d6813a03000035/train/python

def high_and_low(numbers):
    num = numbers.split()
    a = []
    for i in num:
        a.append(int(i))
    b = max(a)
    c = min(a)
    return f"{b} {c}"


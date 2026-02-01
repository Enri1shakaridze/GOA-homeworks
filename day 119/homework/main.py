# 1) https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/python

def odd_ball(arr):
    arr2 = arr.index('odd')
    return arr2 in arr

# 2) https://www.codewars.com/kata/546f922b54af40e1e90001da/train/python

def alphabet_position(text):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    res = []
    text.split()
    text = text.lower()
    for i in text:
        if i in alphabet:
            res.append(str(alphabet.index(i.lower()) + 1))
    return ' '.join(res)

# 3) https://www.codewars.com/kata/580435ab150cca22650001fb/train/python

def filter_lucky(lst):
    filte = []
    for i in lst:
        if '7' in str(i):
            filte.append(i)
    return filte

# 4) https://www.codewars.com/kata/57f5e7bd60d0a0cfd900032d/train/python

def missing_no(nums):
    summ = sum(nums)
    a = 5050
    return a - summ

# 5) https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/python

def between_extremes(numbers):
    a = min(numbers)
    b = max(numbers)
    return b - a

# 6) https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/python

def factorial(n):
    summ = 1
    for i in range(1, n +1):
        summ *= i
    return summ
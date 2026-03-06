# 1) https://www.codewars.com/kata/57e3f79c9cb119374600046b/train/python

def hello(name=''):
    if name != "":
        return 'Hello, ' + name.capitalize() + '!'
    return 'Hello, World!'

# 2) https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/python

def sum_mix(arr):
    total = 0
    for x in arr:
        number = int(x)  
        total += number 
    return total

# 3) https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/python

def basic_op(operator, value1, value2):
    if operator == '+':
        return value1 + value2
    elif operator == '-':
        return value1 - value2
    elif operator == '/':
        return value1 / value2
    elif operator == '*':
        return value1 * value2

# 4) https://www.codewars.com/kata/582cb0224e56e068d800003c/train/python

def litres(time):
    return int(time * 0.5)

# 5) https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/python

def century(year):
    return (year + 99) // 100
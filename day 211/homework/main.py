# ნ1 https://www.codewars.com/kata/679e0a54f8d448b508865c3b/train/python

def estimator(obstacles, stamina):
    i = 0

    while i < len(obstacles):
        if obstacles[i] == 0:
            i += 1
            
        count = 0

        while i < len(obstacles) and obstacles[i] == 1:
            count += 1
            i += 1

        if count == 1:
            stamina -= 2
        elif count == 2:
            stamina -= 5
        elif count == 3:
            stamina -= 10

    return stamina >= 0

# n2 https://www.codewars.com/kata/59f061773e532d0c87000d16/train/python

def elevator_distance(array):
    count = 0
    for i in range(1, len(array)):
        count+= abs(array[i]-array[i-1])

    return count

# n3 https://www.codewars.com/kata/580a41b6d6df740d6100030c/train/python

def alan(arr):
    lists = ["Rejection" ,"Disappointment" ,"Backstabbing Central", "Shattered Dreams Parkway"]
    
    for i in lists:
        if i not in arr:
            return 'No, seriously, run. You will miss it.'
    return "Smell my cheese you mother!"

# n4 https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/python

def factorial(n):
    summ = 1
    for i in range(1, n +1):
        summ *= i
    return summ

# n5 https://www.codewars.com/kata/56d19b2ac05aed1a20000430/train/python

def between_extremes(numbers):
    a = min(numbers)
    b = max(numbers)
    return b - a
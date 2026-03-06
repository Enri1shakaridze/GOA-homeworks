# 1) https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/python

def distinct(seq):
    sum = []
    for num in seq:
        if num not in sum:
            sum.append(num)
    return sum 

# 2) https://www.codewars.com/kata/5601409514fc93442500010b/train/python

def better_than_average(class_points, your_points):
    name = sum(class_points) / len(class_points)
    if class_points[0] == class_points[1] == class_points[2]:
        return False
    else:
        return your_points >= name

# 3) https://www.codewars.com/kata/566dc566f6ea9a14b500007b/train/python

def kata_13_december(lst): 
    # Fix this code
    for i in range(len(lst) -1, -1, -1): 
        if lst[i] % 2 == 0: 
            lst.pop(i)
    return lst

# 4) https://www.codewars.com/kata/56170e844da7c6f647000063/train/python

def people_with_age_drink(age):
    if age < 14:
        return "drink toddy"
    elif age < 18 and age >= 14:
        return "drink coke"
    elif age < 21 and age >= 18:
        return "drink beer"
    else:
        return "drink whisky"

# 5) https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python

def repeat_str(repeat, string):
    return repeat * string

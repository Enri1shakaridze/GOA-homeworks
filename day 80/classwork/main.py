# 1) https://www.codewars.com/kata/5545f109004975ea66000086/train/python

def is_divisible(n,x,y):
    if n % x == 0 and n % y == 0:
        return True
    else:
        return False

# 2) https://www.codewars.com/kata/57a429e253ba3381850000fb/train/python


def bmi(weight, height):
    value = weight / (height ** 2)
    if value <= 18.5:
        return "Underweight"
    elif value <= 25.0:
        return "Normal"
    elif value <= 30.0:
        return "Overweight"
    else:
        return "Obese"


# ვისაც არ გაგიკეთებიათ:
# 3) https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/python

def find_multiples(integer, limit):
    lintn = []
    for i in range(integer, limit + 1, integer):
        lintn.append(i)
    return lintn
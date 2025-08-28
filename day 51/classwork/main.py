# ვიმუშავეთ codewars- ებზე
# 1) https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python

def repeat_str(repeat, string):
    return repeat * string

# 2) https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/python

def is_even(n): 
    if n % 2 == 0:
        return True
    else:
        return False
    
# 3) https://www.codewars.com/kata/56200d610758762fb0000002/train/python

def add_five(num):
    return num + 5

# 4) https://www.codewars.com/kata/55685cd7ad70877c23000102/train/python

def make_negative( number ):
    if number > 0:
        return -number
    elif number < 0:
        return number
    else:
        return 0
    
# 5) https://www.codewars.com/kata/55a14f75ceda999ced000048/train/python

def temple_strings(obj, feature): 
    return f"{obj} are {feature}"

# 6) https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/python

def find_average(numbers):
    if len(numbers) == 0:
        return 0
    else:
        return sum(numbers) / len(numbers)
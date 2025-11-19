# 1) https://www.codewars.com/kata/580a4734d6df748060000045/train/python   

def is_sorted_and_how(arr):
    if arr == sorted(arr):
        return 'yes, ascending'
    elif arr == sorted(arr)[::-1]:
        return 'yes, descending'
    else:
        return 'no'

# 2) https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/python

# write the function is_anagram
def is_anagram(test, original):
    test = test.lower()
    original = original.lower()
    
    return sorted(test) == sorted(original)


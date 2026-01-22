# 1)https://www.codewars.com/kata/5949481f86420f59480000e7/train/python

def odd_or_even(arr):
    arr = sum(arr)
    if arr % 2 == 0:
        return 'even'
    else:
        return 'odd'

# 2)https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/python

def duplicate_count(text):
    text = text.lower()         
    counted = []                
    duplicates = 0             
    
    for char in text:
        if char not in counted:
            if text.count(char) > 1: 
                duplicates += 1
            counted.append(char)     
    
    return duplicates

# 3)https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/python

def sort_array(source_array):
    odds = sorted([num for num in source_array if num % 2 != 0])
    odd_index = 0
    result = []
    
    for num in source_array:
        if num % 2 != 0:
            result.append(odds[odd_index])
            odd_index += 1
        else:
            result.append(num)

# 4)https://www.codewars.com/kata/5208f99aee097e6552000148/train/python

def solution(s):
    b = ''
    
    for i in s:
        if i == i.upper():
            b += ' '
            b += i
        else:
            b += i
    return b

# 5)https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

def duplicate_encode(word):
    word = word.lower()
    a = ''
    for i in word:
        if word.count(i) == 1:
            a += '('
        else:
            a += ')'
    return a

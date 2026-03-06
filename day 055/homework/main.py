# 1) https://www.codewars.com/kata/59441520102eaa25260000bf/train/python

def unusual_five():
    return len([
        'helooooooo',
        'worddddddd',
        'howwwwwwww',
        'areeeeeeee',
        'youuuuuuuu'
    ])

# 2) https://www.codewars.com/kata/50654ddff44f800200000004/train/python

def multiply(a, b):
    return a * b

# 3) https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/python

def solution(string):
    return string[::-1]

# 4) https://www.codewars.com/kata/5715eaedb436cf5606000381/train/python

def positive_sum(arr):
    new_arr = []
    for i in arr:
        if i > 0:
            new_arr.append(i)
    return sum(new_arr) 

# 5) https://www.codewars.com/kata/5865918c6b569962950002a1/train/python

def str_count(strng, letter):
    return strng.count(letter)
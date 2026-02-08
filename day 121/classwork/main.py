# 1) https://www.codewars.com/kata/587731fda577b3d1b0001196/train/python

def camel_case(s):
    res = ''
    s = s.split()
    for i in s:
        res += i.capitalize()
    return res
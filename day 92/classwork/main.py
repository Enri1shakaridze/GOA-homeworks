# 8kyu:
# 1) https://www.codewars.com/kata/596c6eb85b0f515834000049/train/python

def replace_dots(s):
    return s.replace(".", "-")

# 2) https://www.codewars.com/kata/59811fd8a070625d4c000013/train/python

def integrate(coefficient, exponent):
    new = exponent + 1
    neww = coefficient // new
    return f'{neww}x^{new}'

# 7kyu:
# 3) https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/train/python

def is_kiss(words):
    w = words.split()
    num = len(w)
    for i in w:
        if len(i) > num:
            return "Keep It Simple Stupid"
    return "Good work Joe!"
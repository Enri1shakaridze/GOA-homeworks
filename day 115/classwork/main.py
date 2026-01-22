# 1) https://www.codewars.com/kata/523f5d21c841566fde000009/train/python

def array_diff(a, b):
    c = []
    for i in a:
        if i not in b:
            c.append(i)
            
    return c

array_diff = lambda a, b: [i for i in a if i not in b]

# 2) https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/python

def duplicate_encode(word):
    word = word.lower()
    a = ''
    for i in word:
        if word.count(i) == 1:
            a += '('
        else:
            a += ')'
    return a
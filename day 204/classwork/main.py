# 1) https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/python
def sum_of_minimums(numbers):
    total = 0
    for i in numbers:
        minn = min(i)
        total += minn
    return total
# 2) https://www.codewars.com/kata/53697be005f803751e0015aa/train/python

def decode(st):
    res = ''
    
    for i in st:
        if i == '1':
            res += 'a'
        elif i == '2':
            res += 'e'
        elif i == '3':
            res += 'i'
        elif i == '4':
            res += 'o'
        elif i == '5':
            res += 'u'
        else:
            res += i
        
    return res
    
def encode(st):
    res = ''
    
    for i in st:
        if i == 'a':
            res += '1'
        elif i == 'e':
            res += '2'
        elif i == 'i':
            res += '3'
        elif i == 'o':
            res += '4'
        elif i == 'u':
            res += '5'
        else:
            res += i
        
    return res
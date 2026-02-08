# 1) https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python

def likes(names):
    l = len(names)
    if l == 0:
        return 'no one likes this'
    elif l == 1:
        return f'{str(names[0])} likes this'
    elif l == 2:
        return f'{str(names[0])} and {str(names[1])} like this'
    elif l == 3:
        return f'{str(names[0])}, {str(names[1])} and {str(names[2])} like this'
    else:
        return f'{str(names[0])}, {str(names[1])} and {l - 2} others like this'

# 2) https://www.codewars.com/kata/541c8630095125aba6000c00/train/python

def digital_root(n):
    while n > 9:
        s = 0
        for d in str(n):
            s += int(d)
        n = s
    return n

# 3) https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python

def create_phone_number(n):
    return f"({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}"

# 4) https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/python

# 5) https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/python

def solution(s):
    if len(s) % 2 != 0:
        s += "_"
    res = []
    for i in range(0, len(s), 2):
        name = s[i:i+2]
        res.append(name)
    return res

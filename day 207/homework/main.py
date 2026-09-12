
# 1) https://www.codewars.com/kata/59f08f89a5e129c543000069/train/python
def add(num1, num2): 
    num1 = str(num1)[::-1]
    num2 = str(num2)[::-1]
    res = []

    for i in range(max(len(num1), len(num2))):
        if i >= len(num1):
            r = int(num2[i])
        elif i >= len(num2):
            r = int(num1[i])
        else:
            r = int(num1[i]) + int(num2[i])
        res.append(str(r))
    res = res[::-1]
    return int(''.join(res))
    
# 2) https://www.codewars.com/kata/58161c5ac7e37d17fc00002f/train/python
def find_arr(arr_a, arr_b, rng, wanted):
    seteda = set(arr_a)
    setedb = set(arr_b)

    resa = list(filter(lambda x: arr_a.count(x) >= 2, seteda))
    resb = list(filter(lambda x: arr_b.count(x) >= 2, setedb))
    
    res2 = set(resa) & set(resb)
    res2 = list(res2)
    
    resrng = []
    for i in range(rng[0], rng[1]+1):
        if i in res2:
            resrng.append(i)

    if wanted == 'odd':
        finalRes = list(filter(lambda x: x % 2 != 0, resrng))
    elif wanted == 'even':
        finalRes = list(filter(lambda x: x % 2 == 0, resrng))
    else:
        0
    return sorted(finalRes)
        
# 3) https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/python

def add(num1, num2): 
    num1 = str(num1)[::-1]
    num2 = str(num2)[::-1]
    res = ''

    if len(num1) > len(num2):
        for i in range(len(num1)):
            if i < len(num2):
                s = int(num2[i]) + int(num1[i])
            else:
                s = int(num1[i])
            res += str(s)

    else:
        for i in range(len(num2)):
            if i < len(num1):
                s = int(num2[i]) + int(num1[i])
            else:
                s = int(num2[i])
            res += str(s)

    return res[::-1]

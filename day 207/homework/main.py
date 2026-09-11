
# 1) https://www.codewars.com/kata/59f08f89a5e129c543000069/train/python
# ?
def dup(arry):
    res = []
    res2 = ''
    for i in arry:
        res2 = ''
        i+='1'
        for j in range(len(i)-1):
            if i[j] != i[j+1]:
                res2+=i[j]
        res.append(res2)
    return res
# 2) https://www.codewars.com/kata/58161c5ac7e37d17fc00002f/train/python
# ?
def find_arr(arr_a, arr_b, rng, wanted):
    res2 = set(arr_a) & set(arr_b)
    res3 = [item for item in res2 if rng[0] < item < rng[1]+1]
    
    res = []
    if wanted == 'odd':
        for i in res3:
            if i % 2 != 0:
                res.append(i)
    else:
        for i in res3:
            if i % 2 == 0:
                res.append(i)
    return res
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

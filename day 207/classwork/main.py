# 1) https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/python
# ?
# 2) https://www.codewars.com/kata/59f08f89a5e129c543000069/train/python
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
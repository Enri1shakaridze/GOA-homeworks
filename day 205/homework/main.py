# 6kyu
# 1) https://www.codewars.com/kata/556021360863a1708900007b/train/python
def check_valid_tr_number(number):
    lst = str(number)
    if lst[0] == '0':
        return False
    elif lst.isdigit() == False:
        return False
    elif len(lst) != 11:
        return False
    numsodd = int(lst[0]) + int(lst[2]) + int(lst[4]) + int(lst[6]) + int(lst[8])
    numseven = int(lst[1]) + int(lst[3]) + int(lst[5]) + int(lst[7])
    if ((numsodd * 7)- numseven) % 10 != int(lst[9]):
        return False
    
    if sum(int(x) for x in lst[:10]) % 10 != int(lst[10]):
        return False
    
    return True
    

# 7kyu
# 2) https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/python
def mirror(list):
    list = sorted(list)
    list2 = list[::-1]
    return list+list2[1:]
# 3) https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

def square_digits(num):
    num_str = str(num)
    
    result_str = ""

    for digit in num_str:
        digit_int = int(digit)
        squared_value = digit_int ** 2
        result_str += str(squared_value)
    return int(result_str)

# 4) https://www.codewars.com/kata/583989556754d6f4c700018e/train/python

def multiples(a,b,limit):
    res = []
    for i in range(a, limit+1):
        if i % a == 0 and i % b == 0:
            res.append(i)
    return res
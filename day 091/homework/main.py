# 1) https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe/train/python

def odd_ball(arr):
    arr2 = arr.index('odd')
    return arr2 in arr

# 2) https://www.codewars.com/kata/5813d19765d81c592200001a/train/python

def dont_give_me_five(start,end):
    count = 0
    for i in range(start, end + 1):
        if '5' not in str(i):
            count += 1
    return count

# 3) https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/python

def find_dup(arr):
    arr.sort()
    a = set(arr)
    return (sum(arr) - sum(a))


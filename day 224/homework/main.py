
# https://www.codewars.com/kata/514b92a657cdc65150000006/train/python
def solution(number):
    if number <= 0:
        return 0
    res = 0
    for i in range(number):
        if i % 3 == 0 or i % 5 == 0:
            res += i
    return res
    

# https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python

def create_phone_number(nums):
    nums = ''.join(str(d) for d in nums)
    return f"({nums[0:3]}) {nums[3:6]}-{nums[6:10]}"
# https://www.codewars.com/kata/54da5a58ea159efa38000836/train/python
def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 != 0:
            return i

# https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/python

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

# https://www.codewars.com/kata/523f5d21c841566fde000009/train/python

def array_diff(a, b):
    c = []
    for i in a:
        if i not in b:
            c.append(i)
            
    return c
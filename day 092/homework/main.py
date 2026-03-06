# 1) https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/python

def maps(a):
    res = []
    for i in a:
        res.append(i * 2)
    return res

# 2) https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/python

def reverse_seq(n):
    res = []
    for i in range(1, n + 1):
        res.append(i)
    return res[::-1]

# 3) https://www.codewars.com/kata/57eae65a4321032ce000002d/train/python

def fake_bin(x):
    result = ""
    for char in x:
        digit = int(char)
        if digit < 5:
            result += '0'
        else:
            result += '1'
    return result

# 4) https://www.codewars.com/kata/577a98a6ae28071780000989/train/python

def minimum(arr):
    return min(arr)

def maximum(arr):
    return max(arr)

# 5) https://www.codewars.com/kata/515e271a311df0350d00000f/train/python

def square_sum(numbers):
    res = []
    for i in numbers:
        res.append(i ** 2)
    return sum(res)

# 6) https://www.codewars.com/kata/5a4e3782880385ba68000018/train/python

def balanced_num(number):
    s = str(number)
    L = len(s)

    split_index = (L - 1) // 2
    left_part = s[:split_index]
    right_part = s[L - split_index:]
    left_sum = sum(int(digit) for digit in left_part)
    right_sum = sum(int(digit) for digit in right_part)

    if left_sum == right_sum:
        return "Balanced"
    else:
        return "Not Balanced"

# 7) https://www.codewars.com/kata/511f11d355fe575d2c000001/train/python

def two_oldest_ages(ages):
    ages = sorted(ages)
    return ages[-2:]

# 8) https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/python

def find_short(s):
    s = s.split()
    res = []
    for i in s:
        res.append(len(i))
    return min(res)

# 9) https://www.codewars.com/kata/55b42574ff091733d900002f/train/python

def friend(x):
    res = []
    for i in x:
        if len(i) == 4:
            res.append(i)
    return res

# 10) https://www.codewars.com/kata/593b1909e68ff627c9000186/train/python

def nickname_generator(name):
    if len(name) < 4:
        return "Error: Name too short"
    vowels = "aeiouAEIOU"
    third_letter = name[2]
    if third_letter in vowels:
        return name[:4]
    else:
        return name[:3]
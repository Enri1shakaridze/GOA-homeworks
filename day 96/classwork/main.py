# 1)https://www.codewars.com/kata/54da5a58ea159efa38000836

def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 != 0:
            return i

# 2)https://www.codewars.com/kata/52597aa56021e91c93000cb0

def move_zeros(lst):
    a = []
    b = []
    for i in lst:
        if i != 0:
            a.append(i)
        else:
            b.append(i)
    return a + b

# 3)https://www.codewars.com/kata/52223df9e8f98c7aa7000062

def rot13(message):
    letters = "abcdefghijklmnopqrstuvwxyz"
    letters_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    res = ''
    for i in message:
        if i in letters:
            index = letters.index(i)
            new = (index + 13) % 26
            res += letters[new]
        elif i in letters_upper:
            index = letters_upper.index(i)
            new = (index + 13) % 26
            res += letters_upper[new]
            
        else:
            res += i
    return res
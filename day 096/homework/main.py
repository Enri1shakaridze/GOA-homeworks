# 1)https://www.codewars.com/kata/52223df9e8f98c7aa7000062

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

# 3)https://www.codewars.com/kata/514a024011ea4fb54200004b



# 4)https://www.codewars.com/kata/52449b062fb80683ec000024



# 5)https://www.codewars.com/kata/5264d2b162488dc400000001

def spin_words(sentence):
    wrd = sentence.split()
    a = []
    for i in wrd:
        if len(i) >= 5:
            a.append(i[::-1])
        else:
            a.append(i)
    return " ".join(a)
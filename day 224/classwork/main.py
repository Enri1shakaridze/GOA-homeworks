# https://www.codewars.com/kata/5264d2b162488dc400000001/train/python

def spin_words(sentence):
    wrd = sentence.split()
    a = []
    for i in wrd:
        if len(i) >= 5:
            a.append(i[::-1])
        else:
            a.append(i)
    return " ".join(a)
# https://www.codewars.com/kata/541c8630095125aba6000c00/train/python
def digital_root(n):
    while n > 9:
        s = 0
        for d in str(n):
            s += int(d)
        n = s
    return n

# https://www.codewars.com/kata/54da539698b8a2ad76000228/train/python
def is_valid_walk(walk):
    x = 0
    y = 0
    for i in walk:
        if i == 'e':
            y+=1
        elif i == 'n':
            x+=1
        elif i == 'w':
            y-=1
        elif i == 's':
            x-=1
            
    if len(walk) == 10 and x == 0 and y == 0:
        return True
    return False
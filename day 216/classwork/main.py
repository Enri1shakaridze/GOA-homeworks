# 1) https://www.codewars.com/kata/56f6919a6b88de18ff000b36/train/python
def how_many_dalmatians(n):
    dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
    respond = ''
    if n <= 10:
        respond = dogs[0]
    elif n <= 50:
        respond = dogs[1]
    elif n == 101:
        respond = dogs[3]
    else:
        respond = dogs[2]
    return respond
# 2) https://www.codewars.com/kata/590f5b4a7bbb3e246000007d/train/python

def comes_after(st, l): 
    l = l.lower()    
    z = '1234567890'
    st+='1'
    res = ''
    print(st)
    
    for i in range(len(st)):
        if st[i].lower() == l.lower():
            if st[i+1].lower() not in z:
                if st[i+1].isalpha():
                    res+= st[i+1]
                
    return res
# 1) https://www.codewars.com/kata/5a4138acf28b82aa43000117
def adjacent_element_product(array):
    n = -999999999999999999999999999
    for i in range(len(array) -1):
        if array[i] * array[i+1] > n:
            n = array[i] * array[i+1]
    return n

# 3) https://www.codewars.com/kata/546f922b54af40e1e90001da

def alphabet_position(text):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    res = []
    text.split()
    text = text.lower()
    for i in text:
        if i in alphabet:
            res.append(str(alphabet.index(i.lower()) + 1))
    return ' '.join(res)
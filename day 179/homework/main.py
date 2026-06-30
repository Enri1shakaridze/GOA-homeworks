
#  1) https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/python


def delete_nth(order,max_e):
    n = []
    for i in order:
        if n.count(i) < max_e:
            n.append(i)
        
    return n


#  2) https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/python


def adjacent_element_product(array):
    n = -999999999999999999999999999
    for i in range(len(array) -1):
        if array[i] * array[i+1] > n:
            n = array[i] * array[i+1]
    return n
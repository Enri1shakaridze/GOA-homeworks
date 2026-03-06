# 1) https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/python

def count_red_beads(n):
    if n < 2:
        return 0
    else:
        return 2 * (n -1)

# 2) https://www.codewars.com/kata/56582133c932d8239900002e/train/python



def most_frequent_item_count(collection):
    if not collection:
        return 0
    
    max = 0
    
    for i in collection:
        c = collection.count(i)
        if c > max:
            max = c
            
    return max


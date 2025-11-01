# 1) https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/python

def excluding_vat_price(price):
    if price:
        price = price / 1.15
        price = int(price * 100 + 0.5) / 100
        return price
    return -1

# 2) https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/python



# 3) https://www.codewars.com/kata/643af0fa9fa6c406b47c5399/train/python

def quadrant(x, y):
    if x > 0 and y > 0:
        return 1
    elif x < 0 and y < 0:
        return 3
    elif x > 0 and y < 0:
        return 4
    else:
        return 2

# 4) https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/python

def quarter_of(month):
    if month == 1:
        return 1
    elif month == 2:
        return 1
    elif month == 3:
        return 1
    elif month == 4:
        return 2
    elif month == 5:
        return 2
    elif month == 6:
        return 2
    elif month == 7:
        return 3
    elif month == 8:
        return 3
    elif month == 9:
        return 3
    elif month == 10:
        return 4
    elif month == 11:
        return 4
    elif month == 12:
        return 4

# 5) https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/python

def warn_the_sheep(queue):
    name = queue.index("wolf")
    name2 = (int(len(queue)) - int(name)) -1
    if len(queue) > 1 and queue[-1] != "wolf" :
        return f'Oi! Sheep number {name2}! You are about to be eaten by a wolf!'
    elif len(queue) == 1:
        return 'Pls go away and stop eating my sheep'
    elif len(queue) == 0:
        return 'Pls go away and stop eating my sheep'
    elif queue[-1] == "wolf":
        return 'Pls go away and stop eating my sheep'
    else:
        return 'Pls go away and stop eating my sheep'
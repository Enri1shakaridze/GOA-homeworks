# 1) https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/python

def monkey_count(n):
    b = []
    for i in range(1, n + 1):
        b.append(i)
    return b

# 2) https://www.codewars.com/kata/65ba420888906c1f86e1e680/train/python

def collinearity(x1, y1, x2, y2):
    return x1 * y2 == x2 * y1

# 3) https://www.codewars.com/kata/644b17b56ed5527b09057987/train/python

STRANGE_STRING = "ß"

# 4) https://www.codewars.com/kata/5bb904724c47249b10000131/train/python

def points(games):
    count = 0
    for i in games:
        if int(i[0]) > int(i[-1]):
            count += 3
        elif int(i[0]) < int(i[-1]):
            count += 0
        else:
            count += 1
    return count

# 5) https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/python

def quadratic(x1, x2):
    x3 = x1 + x2
    x3 = -x3
    x2 = x1 * x2
    x1 = 1
    return x1, x3, x2

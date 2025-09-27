def filter_positive(listodd):
    resultt = []
    for i in listodd:
        if i > 0:
            resultt.append(i)
    return resultt

print(filter_positive([5, 2, 10, 15]))




def filter_negatives(listodd):
    resultt = []
    for i in listodd:
        if i < 0:
            resultt.append(i)
    return resultt

print(filter_negatives([-5, 2, 10, 15]))



def name(name):
    return name.upper()
print(name("enrike"))
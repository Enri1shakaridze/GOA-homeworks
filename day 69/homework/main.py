def count_occurrences(numbers):
    listn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 9,  1, 1]
    inp = int(input("enterr numberr: "))
    if int(inp) == inp:
        return listn.count(inp)
print(count_occurrences(0))

def double(listn, user):
    n = [1, 2, 3, 4, 5, 6, 7]
    name = input("გსურთ სიის გასუფთავება?: ")
    if name == "no":
        return n
    elif name == "yes":
        return n[0:0]
print(double(1, 1))

# def Fruits(nam):
#     inp = int(input("enter index listn: "))
#     return nam.pop(inp)
# print(Fruits['nn', 'nm', 'ss', 'mm'])

def nam(na):
    if na < 2:
        return False
    for i in range(2, na):
        if na % i == 0:
            return False
    return True
print(nam(4))
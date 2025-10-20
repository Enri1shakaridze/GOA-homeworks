def name(num, nam):
    return num.count(nam)
print(name([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 9,  1, 1], int(input("enter number: "))))

def double(listn, user):
    if user == "no":
        return listn
    elif name == "yes":
        return listn[0:0]
print(double([1, 2, 3, 4, 5, 6, 7], input("გსურთ სიის გასუფთავება?: ")))

def Fruits(listn, choise):
    return  listn.remove(choise)
print(Fruits['apple', 'banana', 'peach'], int(input("enter index of fruits: ")))

def nam(na):
    if na < 2:
        return False
    for i in range(2, na):
        if na % i == 0:
            return False
    return True
print(nam(int(input("enter number: "))))
def numbers(listn):
    num = 1
    for i in listn:
        num *= i
    return num
print(numbers([1, 4, 9]))



def string_found(string, symboly):
    if symboly in string:
        return "found"
    else: 
        return "not found"
print(string_found("hello word", "o"))



def string(string):
    return string[::-1]
print(string("enrooo"))


def strings(list):
    new_list = []
    for i in list:
        if i not in new_list:
            new_list.append(i)
    return new_list
print(strings(["enro", "word", "number", "one", "enro", "one"]))



def string_two(list, symboly):
    if symboly in list:
        return len(symboly)
    else:
        return len(list)
print(string_two(["enrike", "enro", "saba"], "enro"))
def manual_sum(numbers):
    total = 0
    for i in numbers:
        total += i
    return total
print(manual_sum([1, 5, 9, 11, 4]))




def user_info(name, surename, age):
    return f"user name is {name}, user surename is {surename}, user age is {age}"
print(user_info("enrike", "shakaradze", 14))




def Arithmetic_mean(list):
    return sum(list) / len(list)
print(Arithmetic_mean([2, 4, 7, 9, 11]))




def string(string):
    name = "აეიოუaeiou"
    result = ""
    for i in string:
        if i in name:
            result += i
    return result
print(string("გამარჯობა, Hello"))
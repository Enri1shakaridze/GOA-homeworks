
def check_age(age):
    if age >= 18:
        return "Access Granted"
    else:
        return "Access Denied"

print(check_age(17))





def print_names(names_list):
    for i in names_list:
        print(i)
    return names_list
print(print_names(['enrike', 'saba', 'temo']))




def odd_or_even(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
print(odd_or_even(9))




def student_grade(score):
    if 90 <= score <= 100:
        return "A"
    elif 70 <= score <= 89:
        return "B"
    elif 50 <= score <= 69:
        return "C"
    elif 0 <= score <= 49:
        return "F"
    else:
        return "Invalid score"
print(student_grade(91))
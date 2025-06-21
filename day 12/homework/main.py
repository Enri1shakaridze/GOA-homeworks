# შედარების ოპერატორები, რომლებიც ვისწავლეთ:
# == – ტოლია
# != – არ არის ტოლი
# > – მეტია
# < – ნაკლებია
# >= – მეტია ან ტოლი
# <= – ნაკლებია ან ტოლი

print(5 == 5)         # True
print("cat" == "dog") # False
print(10 == 10.0)     # True

print(3 != 4)         # True
print("apple" != "apple") # False
print(7 != 7.1)       # True

print(10 > 5)         # True
print(2 > 8)          # False
print(3.5 > 3)        # True

print(1 < 2)          # True
print(10 < 5)         # False
print(7 < 7.1)        # True

print(5 >= 5)         # True
print(6 >= 4)         # True
print(2 >= 10)        # False


my_height = 170  # ჩემი სიმაღლე სანტიმეტრებში
user_height = int(input("enter your height: "))
print(user_height < my_height)


num1 = "14"
num2 = 14
print(num1 == num2) # ეს კოდი გამოიტანს False რადგან num1 ში სტრინგით გვაქვს შემოტანილი რიცხვი და  num2 ში კი ინტეჯერათ ამიტომ სტრინგსა და ინტეგერს შორის ვერ მოვახერხებთ შედარებას.

my_surename = "Shakaridze"
user_surename = input("enter your surename: ")
print(my_surename != user_surename)
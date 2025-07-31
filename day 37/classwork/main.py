number = int(input("enter the even number: "))

if number > 0:
    print("number is even")
elif number < 0:
    print("number is negative")
else:
    print("the number is zero")

correct_password = "python123"
password = input("enter correct password: ")
while correct_password != password:
    print("incorrect password")
    password = input("try again: ")

print("correct password")
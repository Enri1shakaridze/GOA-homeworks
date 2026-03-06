number1 = int(input("enter five number: "))
number2 = int(input("enter five number: "))
number3 = int(input("enter five number: "))
number4 = int(input("enter five number: "))
number5 = int(input("enter five number: "))

number = [number1, number2, number3, number4, number5]
sum = sum(number)
mean = sum/5
print(f"The aritchmetic mean of this list is: ", mean)
print(f"The sum of all numbers in this list is: ", sum)




nam1 = input("enter the text: ")
nam2 = input("enter the text: ")
nam3 = input("enter the text: ")
nam4 = input("enter the text: ")
name = [nam1, nam2, nam3, nam4]
for i in name:
    print(i)


word = int(input("enter the even number: "))

if word %2 == 0:
    print("the number is even")
else:
    print("the number is odd")


week1 = input("enter week day: ")
week2 = input("enter week day: ")
week3 = input("enter week day: ")
week4 = input("enter week day: ")
week5 = input("enter week day: ")
week6 = input("enter week day: ")
week7 = input("enter week day: ")

weeks = [week1, week2, week3, week4, week5, week6, week7]
for i in weeks[::2]:
    print(i)
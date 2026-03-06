# რას ეწოდება ფუნქცია?
# ფუნქცია არის კოდის ბლოკი, რომელსაც სახელი აქვს მინიჭებული და რომელსაც შეგვიძლია რამდენჯერმე გამოვიყენოთ. ფუნქცია იძახება მხოლოდ მაშინ, როცა მას დავუძახებთ.
# რისთვის გამოიყენება ფუნქციები Python-ში?
# ფუნქციები Python-ში გამოიყენება იმისთვის, რომ კოდი გავამარტივოთ, ავირიდოთ ერთი და იგივე კოდის მრავალჯერ წერა და დავამუშაოთ მონაცემები უფრო ორგანიზებულად.
# არგუმენტი არის მონაცემი, რომელსაც ფუნქციას გადავცემთ ფრჩხილებში ფუნქციის გამოძახებისას.
# მაგალითად: print("Hello") — აქ "Hello" არის არგუმენტი.



data = [10, "text", 5.5, True, None, False, 20, "hello", 7.7, True]


print(data[3]) 
print(data[5])  
print(data[9])  



numbers = [2, 4, 6, 8, 10]

for i in numbers:
    print(i * 2)



for i in range(1, 101):
    if i % 5 == 0:
        print(i)



number = int(input("enter number: "))
total = 0

while number != 0:
    number = int(input("try again: "))
    total += number

print("შეყვანილი რიცხვების ჯამი არის:", total)



i = 1
while i <= 30:
    if i % 2 == 0:
        print(i)
    i += 1




user_string = input("enter the string: ")
print(user_string[::2])




num1 = int(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = int(input("შეიყვანეთ მეორე რიცხვი: "))

if num1 > num2:
    print("პირველი რიცხვი მეტია.")
elif num1 < num2:
    print("მეორე რიცხვი მეტია.")
else:
    print("ორივე რიცხვი ტოლია.")




age = int(input("შეიყვანეთ თქვენი ასაკი: "))

if age < 13:
    print("You are a child.")
elif age < 18:
    print("You are a teen.")
else:
    print("You are an adult.")
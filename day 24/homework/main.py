# List (ანუ სია) არის ისეთი მონაცემთა ტიპი, სადაც შენ შეგიძლია შეინახო ბევრი მნიშვნელობა ერთ ცვლადში. მაგალითად: რიცხვები, სიტყვები, True/False, სხვა ლისტებიც კი.
password = input("Enter your password: ")
repeat = input("Repeat password: ")

while repeat != password:
    repeat = input("Passwords do not match, try again: ")
print("Password confirmed successfully")



secret_number = 7 
guess = int(input("Try to guess the number: "))

while guess != secret_number:
    print("Try again ")
    guess = int(input("Try again: "))
print("You guessed the number successfully! ")



animals = ["lion", "tiger", "cat", "dog", "fox",]
print(f"First and last animals:", animals[0], animals[-1])


colors = ["black", "blue", "red", "green", "white"]
print(f"The third item in the list is:", colors[-3])



name1 = input("Enter the first name: ")
name2 = input("Enter the second name: ")
name3 = input("Enter the third name: ")
names = [name1, name2, name3]

print(names)
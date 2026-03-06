nums = [10, 20, 30, 40, 50, 60]
num1 = nums[:1]
num2 = nums[:-1]
number = num1 + num2
print(num1)
print(num2)
print(number)



word = "Programming"
print(word[:1])
print(word[:-1])
print(word[3:7])
print(word[::-1])


name = input("enter the text: ")
name1 = name[:1]
name2 = name[:-1]
print(name1)
print(name1 + name2)
print(name[::-1])


numbers = [1, 2, 3, 4, 5]
print("თავდაპირველი რიცხვები:", numbers)

indexing = int(input("Which index would you like to replace an element at? (From 0 to 4): "))
new_value = int(input("Enter the new value that will replace the existing one: "))
print(numbers)

if indexing >=0 and indexing <=4:
    numbers[indexing] = new_value
    print("განახლებული სია:", numbers)
else:
    print("შეყვანილი ინდექსის ნომერი არასწორეა გთხოვთ ცადოთ თავიდან:", new_value)



numbers = [1, 2, 3, 2, 1]

if numbers == numbers[::-1]:
    print("Symmetric")
else:
    print("Not symmetric")




numbers = [1, 2, 3, 4, 5, 6, 7, 8]

total_sum = sum(numbers)

count = 8
mean = total_sum / count
print(f"The arithmetic mean of this list is: {mean}")
print(f"The sum of all numbers in this list is: {total_sum}")
# len - აბრუნებს არგუმენტად გადაცემულ სიაში ან სტრინგში არსებულ სიმბოლოებს 
# append - მითითებული სიის ბოლოს ამატებს ელემენტს 
# insert -გადაეცემა რგუმენტები 1. არგუმენტი ინდექსი. 2. არგუმენტი ელემენტი.
# pop -მითითებული სიიდან ამოაგდებს ელემენტს

names = ["enrike", "saba", "temo", "giorgi", "sandro"]
name = input("enter your name: ")
names.append(name)
print(names)


fruits = ["Melon", "Orange", "Cantaloupe", "Watermelon", "Kiwi"]
fruits.pop(4)
fruits.insert(3, "Pomegranate")
print(fruits)
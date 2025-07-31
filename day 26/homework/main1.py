# Mutable (ცვლადი) — ობიექტი, რომლის შინაარსი შეიძლება შეიცვალოს მისი შექმნის შემდეგ.
# List (Mutable)
fruits = ["Apple", "Banana", "Orange"]
fruits[1] = "Mango"  # ცვლილება დაშვებულია
print(fruits)  # ['Apple', 'Mango', 'Orange']

# Immutable (უცვლელი) — ობიექტი, რომლის შინაარსი არ შეიძლება შეიცვალოს მისი შექმნის შემდეგ.
# String (Immutable)
name = "Gio"
print(name[0])  # გამოვა G
# name[0] = "q"  შეცვლა შეუძლებელია – გამოიტანს შეცდომას
name = "qio"  # შეგვიძლია გადავაწეროთ, მაგრამ ეს ქმნის ახალ ობიექტს
print(name)

# მომხმარებლისგან ინფორმაციის მიღება
name = input("enter your name: ")
surname = input("enter your surename: ")
id_number = input("enter your ID number: ")
nationality = input("enter your nationality: ")
# შენახვა სიაში
User_info = [name, surname, id_number, nationality]
# მთლიანი სიის დაბეჭდვა
print("print full user information:", User_info)

# # ინდექსებით გამოყვანა
print("name:", User_info[0])
print("surename:", User_info[1])
print("ID number:", User_info[2])
print("nationality:", User_info[3])



Fruits = ["Strawberry", "Mango", "Melon", "Cherry"]
print("Original list:")

Fruits[3] = "Watermelon"
Fruits[1] = "Pear"
print("Updated list:", Fruits)



word1 = "Moon"
word2 = "light"

final_word = word1 + word2
print("Combined word:", final_word) 
# 2) დაწერეთ პროგრამირებაში დაშვებული შეცდომების ორი კატეგორია. კომენტარის სახით ჩამოწერეთ Error-ების ტიპები, რომლებიც განვიხილეთ.

# 1 -> bug ბაგი ლოგიკურიმშეცდომა კოდში, არ იწვევს  ერორს მაგრამ კოდი არასწორადაა დაწერილი, 2 -> exception ექსეფეშენი პროგრამის გაშვების შედეგად მიღებული შეცდომაა.

# Error-ების ტიპები:
# SyntaxError       - სინტაქსური შეცდომა
# NameError         - უცნობი ან განსაზღვრული არაწარმართული ცვლადის გამოყენება
# TypeError         - მონაცემთა ტიპების არასწორი ოპერაცია
# ValueError        - ფუნქციას ან ოპერაციას გადაეცა არასწორი მნიშვნელობა
# IndexError        - სია ან tuple-ს ინდექსი არასწორია
# ZeroDivisionError - რიცხვის გაყოფა 0-ზე

# 3) მოიძიეთ ინფორმაცია ZeroDivisionError-ის შესახებ. რა შემთხვევაში ვაწყდებით მას პროგრამის გაშვების დროს?

# ZeroDivisionError
# ჩნდება მაშინ, როცა პროგრამაში ვცდილობთ რიცხვის გაყოფას 0-ზე.
# მაგალითი:
# 10 / 0  -> ZeroDivisionError

# 4) მომხმარებელს შემოატანინეთ ორი რიცხვი და სცადეთ მათი გაყოფა.
# თუ მეორე რიცხვი არის 0, დაიჭირეთ შეცდომა და დაბეჭდეთ:
# “Can’t divide a number by 0.”

num1 = int(input('enter first number: '))
num2 = int(input('enter second number: '))

try:
    print(num1 / num2)
except ZeroDivisionError:
    print("Can’t divide a number by 0.')")


# 5) მომხმარებელს შეაყვანინეთ ორი რიცხვი
# • და სცადეთ მათი გაყოფა
# • დაიჭირეთ:
# • ValueError
# • ZeroDivisionError
# თითოეული Exception-ის შემთხვევაში განსხვავებული შეტყობინება დაბეჭდეთ.

try:
    a = int(input("შეიყვანეთ პირველი რიცხვი: "))
    b = int(input("შეიყვანეთ მეორე რიცხვი: "))

    result = a / b
    print("შედეგი:", result)

except ValueError:
    print("შეცდომა: შეიყვანეთ მხოლოდ რიცხვები!")

except ZeroDivisionError:
    print("შეცდომა: ნულზე გაყოფა არ შეიძლება!")

# 6) შექმენით Dictionary მომხმარებლის მონაცემებით.
# სცადეთ ისეთი key-ის მნიშვნელობის გამოტანა, რომელიც არ არსებობს. გამოიყენეთ Try/Except ბლოკი იმისთვის, რომ დაიჭიროთ KeyError.

user = {
    "name": "Nika",
    "age": 16
}

try:
    print(user["email"])  # არ არსებობს
except KeyError:
    print("This key does not exist.")

# 7) მომხმარებელს შემოატანინეთ რიცხვი
# თუ ის ტექსტს შეიყვანს, დაბეჭდეთ:
# "Please Enter numbers only."

try:
    num = int(input("Enter a number: "))
    print("You entered:", num)
except ValueError:
    print("Please Enter numbers only.")

# 8) დაასრულეთ საკლასო დავალება.

# 9) თავიდან უყურეთ Level 102 და 104-ის ჩანაწერებს.

# type() ფუნქცია გვიჩვენებს, თუ რა ტიპის მონაცემია მოცემული მნიშვნელობა.
# მისი გამოყენება მოხერხებულია, რადგან შეგვიძლია დავრწმუნდეთ, რომ ცვლადს აქვს ის ტიპი, რაც საჭიროა ჩვენი კოდის სწორად მუშაობისთვის.


# მონაცემთა ტიპების გარდაქმნის (Data Conversion) ფუნქციებია:
# str(), int(), float(), bool()

# თითოეული ტესტი ყველა ტიპზე:
# int --> str
print(str(123))
print(str(50.5))
print(str(True))
print(str(False))

# str --> int
print(int("123"))
print(int("505"))
print(int(True))
print(int(False))

# int --> float
print(float(50))
print(float(10))
print(float(20))
print(float(25))

# boolean
print(bool(1)) # true
print(bool(0)) # false

# ცვლადებში შეინახეთ თქვენი სახელი,  გვარი და ასაკი (Integer) . ტერმინალში გამოიტანეთ წინადადება - რომელსაც კონკატინაციის შედეგად მიიღებთ. ვიცით რომ String-სა და Integer-ს შორის მათემატიკურ ოპერაციას ვერ შევასრულებთ, შესაბამისად დაწერეთ ისეთი კოდი, რომ Error-ების გარეშე გაეშვას ტერმინალში.
name = "Enrike"
surename = "shakaridze"
age = 14
print(name, surename, age, "years old")


first_number = 10
second_number = 5
third_number = 8
fourth_number = 11
fifth_number = 9
average = (10 + 5 + 8 + 11 + 9) / 5
print(average)

Celsius = 20
Fahrenheit = 20 * 1.8 + 32
print(Fahrenheit)

Fahrenheit = 77
Celsius = (77 - 32) / 1.8
print(Celsius)
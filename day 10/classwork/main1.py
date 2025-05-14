# Input() ფუნქციაში შეყვანილი მონაცემი ყოველთვის ითვლება როგორც string ტიპი

# Data type checking - მონაცემის ტიპის შემოწმება
# Data type Conversion - მონაცემის ტიპის გარდაქმნა

# str - string
# int - integer
# bool - boolean

# Data type checking - მონაცემის ტიპის შემოწმება
# type()

print(type("GOA"))
print(type(10))
print(type(3.5))
print(type(True))

# Data type Conversion - მონაცემის ტიპის გარდაქმნა
# str() - ეს ფუნქცია, გადაყვანილი მნიშვნელობას გადააქცევს String ტიპის მნიშვნელობად.
# int() - ეს ფუნქცია, გადაყვანილი მნიშვნელობას გადააქცევს Integer ტიპის მნიშვნელობად.
# float() - ეს ფუნქცია, გადაყვანილი მნიშვნელობას გადააქცევს Float ტიპის მნიშვნელობად.
# bool() - ეს ფუნქცია, გადაყვანილი მნიშვნელობას გადააქცევს Boolean ტიპის მნიშვნელობად.

# str()
number = 4
number = str(number) # 4 --> "4"
print(type(number))

# int()
num1 = int(input("Enter a number: "))
num2 = int(input("Enter a number: "))
print(num1 - num2)

# float()
num = 34
print(float(num))
print(float(True))

# True --> 1
# False --> 0

# bool()
print(bool(0))
print(bool(1))

# str(), int(), float(), bool() --> explicit
# integer division --> implicit
# explicit - როცა მომხმარებელი საკუთარი ხელით გარდაქმნის ტიპს
# implicit - როცა მონაცემის ტიპს კომპიუტერი/პროგრამა გარდაქმნის ავტომატურად

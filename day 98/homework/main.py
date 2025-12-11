# 2) რას ეწოდება Tuple unpacking? მოიყვანეთ მინიმუმ 3 მაგალითი (Asterisk ოპერატორის გამნოყენების და გამოყენების გარეშეც)
# Tuple unpacking ნიშნავს tuple-ის ელემენტების გადანაწილებას ცალკეულ ცვლადებში.
num = (1, 2, 3, 4, 5, 6, 7, 10)
*num1, num2, num3, num4 = num
print(num1)
print(num2)
print(num3)
print(num4)

name = ('enrike', 'saba', 'temo')
n1, *n2 = name
print(n1)
print(n2)

name = ('enrike', 15, 'saba', 'temo')
*n1, n2, n3 = name
print(n1)
print(n2)

name = ('enrike', 15, 'saba', 'temo')
n1, n2, n3, n4 = name
print(n1)
print(n2)

num = (1, 2, 3, 4, 5, 6, 7, 10)
num1, num2, num3, num4, num5, num6, num7, num8 = num
print(num1)
print(num2)
print(num3)
print(num4)
# 3) კომენტარის სახით ჩამოწერეთ რომელი მეთოდების/ფუნქციების გამოყენებაა შესაძლებელი Tuple-ებზე.

# - count()    → ითვლის რამდენჯერ ჩანს კონკრეტული ელემენტი
# - index()    → აბრუნებს ელემენტის პირველ ინდექსს
# - len()      → აბრუნებს tuple-ის ზომას
# - min()      → აბრუნებს მინიმალურ ელემენტს
# - max()      → აბრუნებს მაქსიმალურ ელემენტს
# - sum()      → აბრუნებს tuple-ის ელემენტების ჯამს (თუ რიცხვებია)
# - tuple()    → შეიძლება შექმნა ახალი tuple
# - sorted()   → აბრუნებს ახალ list-ს ელემენტების დასალაგებლად
# - in / not in

# 4) კომენტარის სახით ჩამოწერეთ რომელი მეთოდების/ფუნქციების გამოყენება არ არის ხელმისაწვდომი Tuple-ებზე.

# - append()   → ახალი ელემენტის დამატება
# - extend()   → სხვა iterable-ის დამატება
# - insert()   → ელემენტის ჩასმა კონკრეტულ პოზიციაზე
# - remove()   → ელემენტის წაშლა
# - pop()      → ელემენტის წაშლა ინდექსით
# - clear()    → ყველა ელემენტის წაშლა
# - sort()     → ელემენტების ადგილზე დასალაგებლად
# - reverse()  → ელემენტების ადგილზე შეწყვილება

# 5) შექმენით Tuple სახელწოდებით info, სადაც შეინახავთ თქვენს მონაცემებს (სახელი, ასაკი, მისამართი ა.შ). მასში შეინახეთ 5 მონაცემი და მოახდინეთ თაფლის unpacking: თითოეულ მონაცემს შესაბამისი ცვლადის სახელი შეისაბამეთ (name, age, etc..)

info = ("Enrike", 16, "Batumi", "Georgia", "Student")

name, age, city, country, status = info

print("Name:", name)
print("Age:", age)
print("City:", city)
print("Country:", country)
print("Status:", status)

# 6) შექმენით Tuple, რომელშიც შეინახავთ მთელ და წილად რიცხვებს. Tuple_ის პირველ ელემენტს დაარქვით num1, დანარჩენი ელემენტები კი rest ცვლადში შეინახეთ Asterisk ოპერატორის გამოყენებით.

numbers = (10, 2.5, 7, 3.14, 8, 1.5)

num1, *rest = numbers

print("num1:", num1)
print("rest:", rest)

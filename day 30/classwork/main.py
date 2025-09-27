
items = ["laptop", "smartphone", "TV", "microphone", "tablet", "drone", "camera", "printer", "scanner", "console"]
print(items[::4])


name_surname = "Enri shakaridze"
print( name_surname)
print(name_surname[::-1])



Fruits = ["apple", "banana", "pear", "pineapple", "peach", "kiwi", "cherry"]
reversed_fruits = Fruits[::-1]
print(reversed_fruits)
print(Fruits[-3:])


# slicing ნიშნავს, რომ მონაცემთა სტრუქტურიდან (მაგ. list ან string)
# ამოვიღოთ ნაწილი კონკრეტული წესით.
# სინტაქსია:
# variable[start:stop:step]
# სადაც:
# start -> რომელი ინდექსიდან დაიწყოს (შედის შედეგში)
# stop -> სად გაჩერდეს (არ შედის შედეგში)
# step -> რამდენით გადავიდეს ყოველი შემდეგი ინდექსისკენ
# მაგალითი:
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(numbers[2:8:2])  # დაიწყებს 2-დან, გაჩერდება 8-ზე (8 არ შედის),
# შედეგი იქნება: [2, 4, 6]


# სტრინგი არის შეუცვლადი (immutable)
name = "ნიკა"
# name[0] = "მ"  ← ეს შეცდომას გამოიწვევს, რადგან სტრინგს ინდექსით ვერ შეცვლი

# სია არის შეცვლადი (mutable)
fruits = ["ვაშლი", "მსხალი", "ატამი"]
fruits[0] = "ბანანი"  # შეცვლის "ვაშლი"-ს "ბანანი"-თ
print(fruits)  # ['ბანანი', 'მსხალი', 'ატამი']
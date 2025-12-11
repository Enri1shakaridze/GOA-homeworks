# 1) დაწერეთ თქვენი ვარაუდი: რას გამოიტანს ეს კოდი?
fruits = ('Apple', 'Pomegranate', 'Cherry', 'Strawberry', 'Blueberry')
*fruit1, fruit2, fruit3 = fruits
# fruit1 იქნება apple; poegranate; cherry;
# fruit2 იქნება strawberry
# fruit3 იქნება blueberry

# 2) ახსენით რას აკეთებს Asterisk ოპერატორი და მოიყვანეთ რამოდენიმე მაგალითი.
# Asterisk (*) Python-ში
# * არის მრავალმხრივი ოპერატორი, რომელსაც Python-ში იყენებენ სხვადასხვა სიტუაციაში.
# Unpacking (გაფართოება)
# გამოიყენება tuple ან list-ის ელემენტების გამოტანისთვის ცვლადებში.
numbers = [1, 2, 3, 4]
a, *b, c = numbers
print(a)  # 1
print(b)  # [2, 3]
print(c)  # 4

fruits = ('Apple', 'Banana', 'Cherry', 'Mango')
first, *middle, last = fruits

print(first)   # Apple
print(middle)  # ['Banana', 'Cherry']
print(last)    # Mango

# 3) ჩამოწერეთ რა მსგავსება და განსხვავებაა List-ებსა და Tuple-ბს შორის.
# განსხვავება ისაა რომ list არის miutable(ანუ მისი შექმნის შემდეგ ელემენტების შეცვლა შესაძლებელია), tuple კი imutable(ანუ მისი შექმნის შემდეგ ელემენტების შეცვლა შეუძლებალია), 
# საერთო:List-ებიც და Tuple-ებიც არის სექვენციური მონაცემთა ტიპები, რაც ნიშნავს, რომ ისინი შეიძლება შეიცავდნენ ელემენტებს გარკვეული რიგით. შეგიძლიათ მიუკერძოებლად მიუწვდეთ ამ ელემენტებს, გამოვიყენოთ მთელი რიცხვი (integer) ინდექსი, რომელიც გამოხატავს მათ პოზიციას სექვენციაში.


# 4) შექმენით Tuple, სადაც შეინახავთ 7 ელემენტს. გამოიყენეთ Tuple Unpacking იმისთვის, რომ 4 სხვადასხვა ცვლადში გადაანაწილოთ Tuple-ის ელემენტები. ოთხივე ცვლადი დაბეჭდეთ ტერმინალში.
num = (1, 2, 3, 4, 5, 6, 7)
*num1, num2, num3, num4 = num
print(num1)
print(num2)
print(num3)
print(num4)
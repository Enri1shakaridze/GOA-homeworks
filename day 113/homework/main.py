# 2) გადაიმეორეთ Lambda და თავიდან შეასრულეთ Level 110-ის დავალებები.

# 3) კომენტარის სახით დაწერეთ, თუ რაში ვიყენებთ map და filter ფუნქციებს. მოიყვანეთ თითო მაგალითი.

# filter ის საშუალებით ვფილტრავთ ლისტებს მასთან შეგვიძლია გამოვიყნოთ if/else ები არ შეგვიძლია შევცვალოთ ელემენტის მნიშვნელობა
# map ი სსაშუალებით ვფილტრავთ ლისტს და ვცვლით ელემენტის მნიშვნელობას

foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]
foodsH = list(filter(lambda i: i[-1] == 'H', foods))
print(foodsH)


languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]
concatination = list(map(lambda j: 'I study ' + j, languages))
print(concatination)

# 4) მოცემულია სია celsius = [0, 25, 100, -10, 37]
# გადააქციეთ Celsius-ები Kelvin-ში map-ის გამოყენებით.

celsius = [0, 25, 100, -10, 37]
c_k = list(map(lambda x: x + 273.15, celsius))
print(c_k)

# Hint:ფორმულა Kelvin = Celsius + 273

# 5) შექმენით რიცხვების სია. map-ის გამოყენებით შეინახეთ სიის თითოეული ელემენტი აყვანილი კვადრატში squared სიაში.

number = [1,2,3,4,5,6,7,8]
squared = list(map(lambda y: y **2, number))
print(squared)

# 6) 5 მომხმარებელს შემოატანინეთ სახელი input-ით, შემდეგ კი შეინახეთ usernames სიაში.
# გამოიყენეთ map, იმისთვის რომ თითოეულ სახელს წინ დაუწეროთ "Welcome". განახლებული შედეგი შეინახეთ სიაში სახელწოდებით greet_users.

first1 = input('enter your name: ')
first2 = input('enter your name: ')
first3 = input('enter your name: ')
first4 = input('enter your name: ')
first5 = input('enter your name: ')

users = [first1, first2, first3, first4, first5]
greet_users = list(map(lambda i: 'welcome ' + i, users))
print(greet_users)

# 7) შექმენით Dict, მასში შეინახეთ key და value წყვილებად მანქანის დასახელება და მისი გამოშვების წელი. გამოიყენეთ filter, რომ old_years ცვლადში შეინახოთ მხოლოდ 2000-წლამდე გამოშვებული მანქანები (სიის სახით).

dictt = {
    'ford-f150': 1990,
    'mercedes sl350': 1969,
    'bmw e60 m5': 2006,
    'cls 63 amg S': 2017
}

old_years = list(filter(lambda item: item[1] <= 2000, dictt.items()))

print(old_years)

# 8) 5 მომხმარებელს შემოატანინეთ სახელი input-ით, შემდეგ კი შეინახეთ usernames სიაში. 
# გამოიყენეთ filter, რომ filtered_users სიაში მხოლოდ შეინახოთ სახელები, რომელთა სიმბოლოების რაოდენობაც 5-ს აღემატება.

first1 = input('enter your name: ')
first2 = input('enter your name: ')
first3 = input('enter your name: ')
first4 = input('enter your name: ')
first5 = input('enter your name: ')

users = [first1, first2, first3, first4, first5]

filter_name = list(filter(lambda x: len(x) > 5, users))
print(filter_name)
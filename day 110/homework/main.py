# მოცემული დავალებები შეასრულეთ Lambda-ს გამოყენებით.

# 2) დაწერეთ ფუნქცია, რომელიც მიიღებს მომხმარებლის სახელს. გვარსა და ასაკს. ფუნქციამ დააბრუნოს მომხმარებლის მონაცემები f სტრინგის გამოყენებით.

userinfo = lambda name, surename, age: f'user name is {name}, his/her surename is {surename}, his/her age is {age}'
print(userinfo('enrike', 'shakaridze', 15))

# 3) დაწერეთ ფუნქცია, რომელიც გამოითვლის რიცხვების სიის საშუალო არითმეტიკულს.

numberr = lambda x: sum(x) / len(x)
print(numberr([1,23,4,5,6,7,8,9]))

# 4) დაწერეთ ფუნქცია, რომელსაც გადაეცემა სტრინგი. პასუხად დააბრუნეთ არის თუ არა იგი პალინდრომი. (მოიძიეთ თუ რას ნიშნავს Palindrome).

string = lambda x: x == x[::-1]
print(string('airevi iveria'))

# 5) დაწერეთ ფუნქცია, რომელიც აბრუნებს:
# • 'Positive' თუ რიცხვი დადებითია.
# • 'Negative' თუ რიცხვი უარყოფითი.
# • 'Zero' თუ რიცხვი ნულია. 
# გამოიყენეთ Ternary ოპერატორი.

num = lambda y: 'positive' if y > 0 else 'negative' if y < 0 else 'zero' if y == 0 else 'არ შეესაბამება რიცხვს'
print(num(9))

# 6) დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს სიას. პასუხად დააბრუნოს სიის თითოეული რიცხვი გამრავლებული 2-ზე.

double_list = lambda lst: [x * 2 for x in lst]
print(double_list([1, 3, 4, 5, 6, 7, 8, 9]))

# 7) გამოიყენეთ List comprehension და Lambda მოცემული პროგრამის დასაწერად:
# დაწერეთ ფუნქცია, რომელსაც გადასცემთ სტრინგების სიას. ფუნქციამ უნდა დააბრუნოს მხოლოდ ისეთი სტრინგები, რომელთა სიგრძეც 5-ს აღემატება.

filter_strings = lambda lst: [x for x in lst if len(x) > 5]

print(filter_strings(['java', 'javascript', 'python', 'c++']))

# 8) გამოიყენეთ List comprehension და Lambda მოცემული პროგრამის დასაწერად:
# დაწერეთ ფუნქცია, რომელსაც გადასცემთ ინტეჯერების სიას. ფუნქციამ უნდა დააბრუნოს მხოლოდ ისეთი რიცხვები, რომლებიც უარყოფითია.

numberr = lambda nums: [n for n in nums if n < 0]

print(numberr([-1, 2, -5, 2, 3, 4, -9]))


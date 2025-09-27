# 1) დაწერეთ ფუნქცია reverse_lst, რომელიც მიიღებს სიას და დააბრუნებს მის შებრუნებულ ვერსიას.

def reverse_list(list):
    return list[::-1]

print(reverse_list(['Enrike', 'temo', 'saba', 'sandro']))

# 2) დაწერეთ პირველი დავალების ანალოგი ფუნქცია სტრინგებზე, სახელად reverse_str.

def reverse_str(list):
    return list[::-1]

print(reverse_str('Enrii'))

# 3) შექმენით ფუნქცია double, რომელიც მიიღებს სიას და დააბრუნებს ახალ სიას, სადაც ყველა რიცხვი გაორმაგებულია.

def double_list(numbers):
    doubled_listn = []
    for i in numbers:
        doubled_listn.append(i * 2)
    return doubled_listn

print(double_list([1, 5, 8, 10]))

# 4) დაწერე ფუნქცია sum_of_digits, რომელიც მიიღებს რიცხვს და დააბრუნებს მის ციფრთა ჯამს (მაგ. 123 → 6).

def sum_of_digits(number):
    total = 0
    for i in str(number):
        total += int(i)
    return total

print(sum_of_digits(235))  # შედეგი: 10

# 5) დაწერე ფუნქცია divisors, რომელიც მიიღებს რიცხვს და დააბრუნებს მის ყველა გამყოფს.
#    მაგ. მოცემულია რიცხვი 4. 4-ის გამყოფებია: 1, 2, 4. შესაბამისად ამ რიცხვის გამყოფებს აბრუნებთ სიის სახით --> [1, 2, 4]
#    12 -> [1, 2, 3, 4, 6, 12]
#    45 -> [1, 3, 5, 9, 15, 45]

def divisors(n):
    divisors_list = []
    for i in range(1, n + 1):
        if n % i == 0:
            divisors_list.append(i)
    return divisors_list

print(divisors(25))

# 6) შექმენით ფუნქცია max, რომელსაც არგუმენტად გადასცემთ რიცხვების სიას და პასუხად დააბრუნებს ამ რიცხვებიდან მაქსიმალურს.

def number(num):
    return max(num)

print(number([1, 2, 3, 4, 5, 6]))

# 7) შექმენით ფუნქცია min, რომელსაც არგუმენტად გადასცემთ რიცხვების სიას და პასუხად დააბრუნებს ამ რიცხვებიდან მინიმალურს.

def number(num):
    return min(num)

print(number([1, 2, 3, 4, 5, 6]))

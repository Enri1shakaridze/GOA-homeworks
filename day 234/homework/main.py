# 1) შექმენი კლასი MathUtils.
# დაწერე @staticmethod სახელად is_even(number), რომელიც შეამოწმებს, არის თუ არა რიცხვი ლუწი (დააბრუნებს True ან False).
# დაწერე მეორე @staticmethod სახელად factorial(n), რომელიც დააბრუნებს გადაცემული რიცხვის ფაქტორიალს.
class MathUtils:
    def __init__(self):
        pass
    @staticmethod
    def is_iven(number):
        return 'even' if number % 2 == 0 else 'odd'
    def factorial(n):
        res = 1
        for i in range(1, n+1):
            res *= i
        return res
print(MathUtils.is_iven(12))
print(MathUtils.is_iven(1))
print(MathUtils.factorial(5))
print(MathUtils.factorial(15))
# 2) შექმენი კლასი Validator.
# დაწერე @staticmethod სახელად is_valid_email(email), რომელიც შეამოწმებს, შეიცავს თუ არა სტრინგი @ და . სიმბოლოებს და  არის თუ არა ცარიელი. მეთოდმა უნდა დააბრუნოს True ან False.
class Validator:
    def __init__(self):
        pass
    @staticmethod
    def is_valid(email):
        return True if '@gmail.com' in email else False
print(Validator.is_valid('enro@gmail.com'))
print(Validator.is_valid('enrogil.com'))
# 3) შექმენი კლასი DateHelper.
# დაწერე @staticmethod სახელად is_leap_year(year), რომელიც დაადგენს, არის თუ არა წელი ნაკიანი (ნაკიანია წელი, რომელიც იყოფა 4-ზე, მაგრამ არ იყოფა 100-ზე, გარდა იმ შემთხვევისა, როცა იყოფა 400-ზე).
class DateHelper:
    def __init__(self):
        pass
    @staticmethod
    def is_leap_year(year):
        if year % 400 == 0:
            return True
        elif year % 100 == 0:
            return False
        elif year % 4 == 0:
            return True
        else:
            return False
print(DateHelper.is_leap_year(1220))
print(DateHelper.is_leap_year(2025))
# 4) შექმენი კლასი SecurityUtils.
# დაწერე @staticmethod სახელად check_password_strength(password), რომელიც დააბრუნებს "Strong", თუ პაროლი არის მინიმუმ 8 სიმბოლო და შეიცავს როგორც ციფრებს, ასევე ასოებს. წინააღმდეგ შემთხვევაში დააბრუნებს "Weak".
class SecurityUnits:
    def __init__(self):
        pass
    @staticmethod
    def Check_password_strength(password):
        return True if len(password) >= 8 and password.isalnum() else 'Weak'
print(SecurityUnits.Check_password_strength('123enrike'))
print(SecurityUnits.Check_password_strength('123'))
# 5) შექმენი კლასი TextFormatter.
# დაწერე @staticmethod სახელად clean_text(text), რომელიც ტექსტს ჩამოაცილებს ზედმეტ space-ებს დასაწყისსა და ბოლოში და ყველა ასოს გადაიყვანს lowercase-ში.
# დაწერე @staticmethod სახელად count_words(text), რომელიც დააბრუნებს ტექსტში სიტყვების რაოდენობას.
class Textformatter:
    def __init__(self):
        pass
    @staticmethod
    def clean_text(text):
        return text.strip().lower()
    def counnt_words(text):
        return len(text.split(' '))
print(Textformatter.clean_text('      Helllllllo Worddddddddd      '))
print(Textformatter.clean_text('  Helllllllo Worddddddddd   '))
print(Textformatter.counnt_words('Hello word'))

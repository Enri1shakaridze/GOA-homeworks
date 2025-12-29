# 2) რა დანიშნულება აქვს finally, else და raise keyword-ებს?

# finally → ყოველთვის სრულდება
# else → შეცდომის არქონის შემთხვევაში
# raise → ხელით იწვევს შეცდომას

# 3) შექმენით ფუნქცია divide(a, b) რომელიც აბრუნებს გაყოფის შედეგს.
# გამოიყენეთ try/except, რომ ZeroDivisionError-მა არ გამოიწვიოს შეცდომა.

def divide(a, b):
    try:
        print(a / b)
    except ZeroDivisionError:
        print('this is ZeroDivisionError')
print(divide(10, 0))

# 4) დაწერეთ კოდი, რომელიც:
# try-ში ბეჭდავს "Trying..."
# except-ში ბეჭდავს "Error encountered"
# finally-ში ბეჭდავს "Code cleanup is done"

try:
    print("Trying...")
except:
    print("Error encountered")
finally:
    print("Code cleanup is done")

# 5) დაწერეთ ფუნქცია check_password, რომელსაც გადაეცემა პარამეტრი pass.
# გამოიყენეთ Exception Handling, რომ გამოიწვიოთ შემდეგი Error-ები:
# თუ პაროლი < 8 სიმბოლოა -> "Password too short"
# თუ შეიცავს space-ს -> "Password cannot contain spaces"
# თუ ყველაფერი სწორია აბრუნებს "Password accepted"

def check_password(password):
    try:
        if len(password) < 8:
            raise Exception("Password too short")
        if ' ' in password:
            raise Exception("Password cannot contain spaces")
        return "Password accepted"
    except ValueError:
        return "Invalid password"

print(check_password("en"))

# 6) განურჩევლად იმისა დაესწარით გაკვეთილს თუ არა - ყველამ თავიდან ბოლომდე უყურეთ ჩანაწერს. შემდეგზე შევამოწმებ თქვენს ცოდნას.
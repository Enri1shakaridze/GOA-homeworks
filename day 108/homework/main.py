# 2)

def hello(name):
    return f'Hello, {name}'

def goodbye(name):
    return f'Goodbye, {name}'

def process_user(name, func):
    return func(name)

print(process_user("Deme", hello))
print(process_user("Deme", goodbye))

# --------------------------
# process user-ს გადაეცით func პარამეტრი. გატესტეთ ორივე შემთხვევა: არგუმენტად მას ჯერ hello, შემდეგ კი goodbye. დააკვირდით Output-ს.

# 3) ჩამოწერეთ რამდენი ტიპის ფუქნცია არსებობს პითონში?
# თითოეულს მიუწერეთ მოკლე დახასიათება.

# არსებობს სამნაირი ფუნქცია:
# 1) pure function რომელიც ყოველ გაშვებაზე ტერმინალში ერთიდაიგივე რამეს აბრუნებს არ იცვლება აუთფუთი.
# 2) impure function ის შემთხვევაში პირიქით ერთიდაიგივე არ გამოაქვს ყოველთვის როცა გავუშვებთ კოდს სხვა აუთფუთი ექნება.
# 3) high-order function როცა ფუნქციას გაწერილი აქვს სხვა ფუნქციის არგუმენტი.

# 4) შექმენით სამივე ფუნქციის ორ-ორი მაგალითი.

# 1) pure function
def square(x):
    return x * x

def full_name(a, b):
    return a + " " + b

# 2) impure function
count = 0
def increase():
    global count
    count += 1
    return count

x = 10
def add_to_x(a):
    return a + x

# 3) high-order function

def call(func):
    return func()

def apply(func, x):
    return func(x)


# 5) დაწერეთ ფუნქცია validate_password(password), რომლის შიგნით ჩაშენებული იქნება ფუნქციები.

# validate_password(password) უნდა იყენებდეს სამ შიდა ფუნქციას:

# • has_min_length()
# ამოწმებს, შეიცავს თუ არა პაროლი მინიმუმ 8 სიმბოლოს
# აბრუნებს True ან False

# • has_digit()
# ამოწმებს, შეიცავს თუ არა პაროლი ციფრს
# აბრუნებს True ან False

# • has_uppercase()
# ამოწმებს, შეიცავს თუ არა პაროლი Uppercase ასოს
# აბრუნებს True ან False


def validate_password(password):
    def has_min_length():
        return len(password) >= 8
    
    def has_digit():
        for char in password:
            if char.isdigit():
                return True
        return False
    
    def has_uppercase():
        for char in password:
            if char.isupper():
                return True
        return False

    length_valid = has_min_length()
    digit_valid = has_digit()
    uppercase_valid = has_uppercase()

    print(f"პაროლის შემოწმება: '{password}'")
    print(f"   მინიმუმ 8 სიმბოლო: {length_valid}")
    print(f"   შეიცავს ციფრს: {digit_valid}")
    print(f"   შეიცავს დიდ ასოს: {uppercase_valid}")

    return length_valid and digit_valid and uppercase_valid


print(validate_password("Password123")) 
print()

print(validate_password("MySecret9"))   
print()

print(validate_password("short1A"))   
print()

print(validate_password("NoDigitsHere")) 
print()

print(validate_password("alllower123")) 
print()

print(validate_password("weak"))      
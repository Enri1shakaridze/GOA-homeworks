# Keyword
# if	ამოწმებს პირობას. თუ პირობა სწორია (True), შესრულდება შესაბამისი კოდი.
# elif	ნიშნავს else if. გამოიყენება მაშინ, როცა if-პირობა არ შესრულდა და გვსურს სხვა ალტერნატიული პირობის შემოწმება.
# else	შესრულდება მაშინ, როცა არც if და არც elif პირობა არ შესრულდა. არ აქვს პირობა, უბრალოდ "ყველა დანარჩენისთვის" მუშაობს.

my_age = 14
user_age = int(input("Enter your age: "))

if my_age == user_age:
    print("We are the same age")
else:
    print("We are not the same age")

# Flowchart-ის მუშაობის პრინციპი:
# პირველ რიგში, მოწმდება არის თუ არა მომხმარებელი 18 წლამდე (age < 18).
# თუ True (ანუ ასაკი ნაკლებია 18-ზე), მაშინ გადადის შემდეგ შემოწმებაზე:
# მოწმდება, არის თუ არა მომხმარებელი სტუდენტი (is_student):
# თუ True — მომხმარებელი იღებს 20% ფასდაკლებას.
# თუ False — მომხმარებელი იღებს 10% ფასდაკლებას.
# თუ მომხმარებელი არ არის 18 წლამდე (age >= 18), მაშინ ფასდაკლება არ მოქმედებს და გადადის სრული ფასის მდგომარეობაში.
age = 14

if age > 18:
    print("regular price")
elif age < 18:
    print("10% discount")
else:
    print("20% discount")




positive_num = int(input("Enter positive number: "))

if positive_num < 0:
    print("please enter positive number")
else:
    print("it's positive number")
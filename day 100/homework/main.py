# 2) Set-ის ძირითადი განმასხვავებელი თვისებები:

# - უნიკალური ელემენტები: Set-ში არ ინახება დუპლიკატები
# - დაულაგებელი: Set არ ინახავს ელემენტების თანმიმდევრობას
# - ცვალებადი (Mutable): შეგვიძლია ელემენტების დამატება და წაშლა
# - უინდექსო: Set-ში ვერ მივწვდებით ელემენტებს ინდექსის მეშვეობით
# - განსხვავებული ტიპები: შეიძლება შეიცავდეს სხვადასხვა ტიპის ელემენტებს
# - მხოლოდ უცვლადი ელემენტები: Set-ში ვერ ჩავამატებთ list-ს ან dictionary-ს

# 3) Set-ის ფუნქციები მაგალითებით:

# add() - ამატებს ერთ ელემენტს
print("1. add():")
fruits = {'apple', 'banana'}
fruits.add('orange')
print(f"შედეგი: {fruits}")

# remove() - შლის ელემენტს (თუ არ არსებობს, გამოიტანს შეცდომას)
print("2. remove():")
fruits = {'apple', 'banana', 'orange'}
fruits.remove('banana')
print(f"შედეგი: {fruits}")

# discard() - შლის ელემენტს (არ გამოიტანს შეცდომას)
print("3. discard():")
fruits = {'apple', 'orange'}
fruits.discard('banana')  # არ მოხდება შეცდომა
print(f"შედეგი: {fruits}")

# pop() - შლის და აბრუნებს შემთხვევით ელემენტს
print("4. pop():")
fruits = {'apple', 'orange', 'cherry'}
removed = fruits.pop()
print(f"წაშლილი: {removed}, დარჩენილი: {fruits}")

# clear() - შლის ყველა ელემენტს
print("5. clear():")
fruits = {'apple', 'orange'}
fruits.clear()
print(f"შედეგი: {fruits}")

# union() - აბრუნებს ორი set-ის გაერთიანებას
print("6. union():")
set1 = {'apple', 'banana'}
set2 = {'cherry', 'banana'}
result = set1.union(set2)
print(f"შედეგი: {result}")

# intersection() - აბრუნებს საერთო ელემენტებს
print("7. intersection():")
set1 = {'apple', 'banana', 'cherry'}
set2 = {'banana', 'cherry', 'orange'}
result = set1.intersection(set2)
print(f"შედეგი: {result}")

# difference() - აბრუნებს განსხვავებებს
print("8. difference():")
set1 = {'apple', 'banana', 'cherry'}
set2 = {'banana', 'orange'}
result = set1.difference(set2)
print(f"შედეგი: {result}")

# update() - ამატებს რამდენიმე ელემენტს
print("9. update():")
fruits = {'apple'}
fruits.update(['banana', 'orange'])
print(f"შედეგი: {fruits}")

# len() - აბრუნებს ელემენტების რაოდენობას
print("10. len():")
fruits = {'apple', 'banana', 'orange'}
print(f"ელემენტების რაოდენობა: {len(fruits)}")


# 4) Set-ი დუპლიკატებით

numbers = {1, 2, 3, 4, 5, 6, 7, 8, 2, 5, 9}
print(f"შედეგი: {numbers}")

# 5) Languages Set-ი

languages = {'HTML', 'CSS', 'JavaScript', 'Python'}
print(f"საწყისი set: {languages}")

languages.remove('JavaScript')
print(f"JavaScript-ის წაშლის შემდეგ: {languages}")

languages.add('React')
print(f"React-ის დამატების შემდეგ: {languages}")


# 6) ქვეყნები და ქალაქები

locations = {'საქართველო', 'საფრანგეთი', 'გერმანია', 'იტალია'}
print(f"ქვეყნები: {locations}")

locations.clear()
print(f"clear()-ის შემდეგ: {locations}")

locations.add('თბილისი')
locations.add('ბათუმი')
locations.add('ქუთაისი')
locations.add('რუსთავი')
print(f"ქალაქები: {locations}")


# 7) კოდის ახსნა - union()

set1 = {'apple', 'banana', 'cherry'}
set2 = {'banana', 'orange'}
combo = set1.union(set2)
print(combo)
# union ის დახმარებით ვაერთიანებთ ელემენტებს მაგრამ თუ ერთ ცვლადში მოცემული ელემენტი ემტხვევა მეორე ცვლადის ელემენტს მაშინ 2 ის მაგივრად ემატება 1 ელემენტი გაერთიანებაში


# 8) Dictionary-ს შემადგენელი კომპონენტები


print("=" * 60)
print("8) DICTIONARY-ს შემადგენელი კომპონენტები")
print("=" * 60)


# Dictionary-ს (ლექსიკონი) შემადგენელი კომპონენტები:

# 1. {} - ფიგურული ფრჩხილები (Curly Braces)

#     - Dictionary იქმნება ფიგურული ფრჩხილების საშუალებით
#     - ცარიელი Dictionary: my_dict = {}
#     - მაგალითი: person = {'name': 'Gio', 'age': 25}

# 2. Key (გასაღები)

#     - უნიკალური იდენტიფიკატორი, რომლის საშუალებითაც ვიღებთ value-ს
#     - უნდა იყოს immutable (უცვლადი) ტიპის: string, number, tuple
#     - არ შეიძლება იყოს list, set ან სხვა dictionary
#     - თითოეული key უნდა იყოს უნიკალური Dictionary-ში
#     - თუ იგივე key-ს ორჯერ გამოვიყენებთ, ბოლო value გადააწერს პირველს
#     - Key არის Case-sensitive: 'Name' და 'name' განსხვავებულია
#     - მაგალითები: 'name', 'age', 1, (1,2), True

# 3. : (ორწერტილი - Colon)

#     - აყოფს key-ს და value-ს ერთმანეთისგან
#     - აუცილებელია key და value-ს შორის
#     - სინტაქსი: key: value
#     - მაგალითი: 'name': 'Giorgi'

# 4. Value (მნიშვნელობა)

#     - ინფორმაცია, რომელიც შენახულია key-ის მიხედვით
#     - შეიძლება იყოს ნებისმიერი ტიპის:
#    * String: 'Giorgi'
#     * Number: 25, 3.14
#     * List: [1, 2, 3]
#     * Dictionary: {'nested': 'dict'}
#    * Set: {1, 2, 3}
#     * Tuple: (1, 2)
#    * Boolean: True/False
#     * None
#     - შეიძლება იყოს დუპლიკატი (განსხვავებით key-სგან)
#     - შეიძლება შეიცავდეს რთულ სტრუქტურებს (nested structures)

# 5. , (მძიმე - Comma)

#     - აყოფს key-value წყვილებს ერთმანეთისგან
#     - ბოლო ელემენტის შემდეგ არ არის აუცილებელი
#     - გამოიყენება მრავალი item-ის შემთხვევაში
#     - მაგალითი: {'name': 'Gio', 'age': 25, 'city': 'Tbilisi'}

# სრული სტრუქტურის მაგალითი:
# -----------------------------
# person = {
#     'name': 'Giorgi',           # key: string, value: string
#     'age': 25,                  # key: string, value: int
#     'height': 180.5,            # key: string, value: float
#     'hobbies': ['coding', 'gym'],  # key: string, value: list
#     'address': {                # key: string, value: dict (nested)
#         'city': 'Tbilisi',
#         'country': 'Georgia'
#     },
#     (1, 2): 'coordinates',      # key: tuple, value: string
#     1: 'number key'             # key: int, value: string
# }

# ელემენტზე წვდომა:
# -----------------
# person['name']          # → 'Giorgi'
# person.get('age')       # → 25
# person[(1, 2)]          # → 'coordinates'
# """

# # დემონსტრაცია
# example_dict = {
#     'სახელი': 'გიორგი',
#     'ასაკი': 25,
#     (0, 0): 'საწყისი წერტილი'
# }
# print(f"\nმაგალითი Dictionary: {example_dict}")


# # 9) Key და Value ელემენტების თვისებები

# KEY-ის თვისებები:

# 1. უნიკალურობა (Uniqueness)

#    - თითოეული key მხოლოდ ერთხელ უნდა გვხვდებოდეს Dictionary-ში
#    - თუ იგივე key-ს ორჯერ გამოვიყენებთ, მეორე value გადააწერს პირველს
#    - მაგალითი:
#      person = {'name': 'Gio', 'name': 'Niko'}
#      # შედეგი: {'name': 'Niko'}  (პირველი გადაიწერა)

# 2. Immutable (უცვლადი)

#    - key უნდა იყოს hashable ტიპის (იხ. hashable განმარტება)
#    - ✓ შეიძლება: string, int, float, tuple, bool, None, frozenset
#    - ✗ არ შეიძლება: list, dict, set (რადგან ცვალებადი არიან)
#    - მაგალითი:
#      good = {(1, 2): 'value'}     # ✓ tuple შეიძლება
#      bad = {[1, 2]: 'value'}      # ✗ list ვერ გამოვიყენებთ

# 3. არ იცვლება (Unchangeable)

#    - key-ის თვითონ ვერ შევცვლით, მაგრამ შეგვიძლია წავშალოთ და ახალი დავამატოთ
#    - თუ იგივე key-ს ახალ value-ს მივანიჭებთ, value გადაიწერება
#    - მაგალითი:
#      person['name'] = 'New Name'  # ცვლის value-ს, არა key-ს

# 4. Case-sensitive (რეგისტრის მგრძნობიარე)

#    - 'Name', 'name', 'NAME' - ყველა განსხვავებული key-ია
#    - მაგალითი:
#      data = {'Name': 'Gio', 'name': 'Niko'}
#      # ორივე განსხვავებული key-ია და არსებობს

# 5. ნებისმიერი Immutable ტიპი

#    - key არ უნდა იყოს მხოლოდ string
#    - შეიძლება იყოს რიცხვი, tuple და ა.შ.
#    - მაგალითი:
#      mixed = {
#          'text': 'value1',      # string key
#          1: 'value2',           # int key
#          (1, 2): 'value3',      # tuple key
#          True: 'value4'         # bool key
#      }


# VALUE-ის თვისებები:


# 1. არ არის უნიკალური (Not Unique)

#    - რამდენიმე key-ს შეიძლია ჰქონდეს ერთი და იგივე value
#    - value-ები შეიძლება განმეორდეს
#    - მაგალითი:
#      data = {'a': 100, 'b': 100, 'c': 100}
#      # ყველა value არის 100 - ეს ნორმალურია

# 2. ნებისმიერი ტიპი (Any Type)

#    - value შეიძლება იყოს ნებისმიერი Python ობიექტი
#    - ✓ შეიძლება: string, int, list, dict, set, tuple, object, None
#    - განსხვავებით key-სგან, value-ს არ აქვს შეზღუდვები
#    - მაგალითი:
#      flexible = {
#          'string': 'text',
#          'number': 123,
#          'list': [1, 2, 3],
#          'dict': {'nested': True},
#          'set': {1, 2, 3},
#          'none': None
#      }

# 3. Mutable (ცვალებადი)

#    - value-ს შეგვიძლია ნებისმიერ დროს შევცვალოთ
#    - თუ value არის list ან dict, შეგვიძლია მისი შიგთავსის შეცვლა
#    - მაგალითი:
#      person = {'hobbies': ['coding']}
#      person['hobbies'].append('gym')    # list-ის შეცვლა
#      person['hobbies'] = ['reading']    # მთლიანი value-ის შეცვლა

# 4. რთული სტრუქტურები (Complex Structures)

#    - value შეიძლება შეიცავდეს nested structures
#    - Dictionary-ში Dictionary, List-ში Dictionary და ა.შ.
#    - მაგალითი:
#      complex = {
#          'user': {
#              'name': 'Gio',
#              'contacts': {
#                  'email': 'gio@mail.com',
#                  'phones': ['555-1234', '555-5678']
#              }
#          }
#      }

# 5. შეიძლება იყოს None

#    - value შეიძლება იყოს None (ცარიელი/არაფერი)
#    - გამოიყენება როდესაც value ჯერ არ არის ცნობილი
#    - მაგალითი:
#      user = {'name': 'Gio', 'age': None, 'email': None}


# Key-ის მაგალითები

valid_keys = {
    'name': 'string key',    
    1: 'int key',              
    3.14: 'float key',            
    (1, 2): 'tuple key',           
    True: 'bool key'               
}
print(f"სწორი key-ები: {valid_keys}")

# Value-ის მაგალითები

valid_values = {
    'string': 'text value',
    'number': 123,
    'float': 3.14,
    'list': [1, 2, 3],
    'dict': {'nested': 'dictionary'},
    'set': {1, 2, 3},
    'tuple': (1, 2, 3),
    'none': None,
    'bool': True
}


# 10) my_info Dictionary

my_info = {
    'name': 'ენრიკე',
    'surname': 'შაქარიძე',
    'age': 175,
    'height': 180,
    'fav_color': 'შავი',
    'fav_cars': ['BMW M5', 'Mercedes AMG GT 63', 'Audi RS7']
}

# Value-ები .get() მეთოდით

print(f"სახელი: {my_info.get('name')}")
print(f"გვარი: {my_info.get('surname')}")
print(f"ასაკი: {my_info.get('age')}")
print(f"სიმაღლე: {my_info.get('height')} სმ")
print(f"საყვარელი ფერი: {my_info.get('fav_color')}")
print(f"საყვარელი მანქანები: {my_info.get('fav_cars')}")


# ====================================
# 11) fav_car Dictionary

fav_car = {
    'name': 'CLS 63 AMG',
    'brand': 'Mecedes',
    'color': 'white',
    'year': '2016',
    'engine': '5.5 kompresor',
    "horse_power": '1150 hp'
}
for key, value in fav_car.items():
    print(f'{key}: {value}')


# 12) Dictionary-ის მნიშვნელობების შეცვლა

# საწყისი Dictionary
student = {
    'name': 'ენრიკე',
    'grade': 85,
    'subject': 'მათემატიკა',
    'passed': False,
    'attendance': 70
}

for key, value in student.items():
    print(f"{key}: {value}")

# პირდაპირი წვდომა key-ით

student['grade'] = 95
student['passed'] = True

# .update() მეთოდი (ერთდროულად რამდენიმე value)

student.update({
    'subject': 'ფიზიკა',
    'attendance': 95
})

# პირობითი შეცვლა

student['passed'] = True
student['name'] = 'ენრო'

# საბოლოო შედეგი

for key, value in student.items():
    print(f"{key}: {value}")
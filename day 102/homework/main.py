# 2) Dictionary-ს update() გამოყენება
user = {
    'username': 'John',
    'pass': 'J123',
    'creation year': 2016,
    'creation month': 10,
    'creation day': 28
}

# 'pass' და 'creation day' განახლება
user.update({
    'pass': 'J1997',
    'creation day': 26
    })

# ყველა Item-ის დაბეჭდვა
for key, value in user.items():
    print(key, ":", value)

# 3) ახალი key & value დამატება
product_amount = {
    'Bag': 13,
    'Heels': 5,
    'Jeans': 29,
    'Sweatshirt': 14,
    'Sunglasses': 30
}

# ახალი პროდუქტი
product_amount.update({
    'T-shirt': 20
    })

print(product_amount)

# 4) 'Sweatshirt' მნიშვნელობის გაყოფა 2-ზე
product_amount['Sweatshirt'] = product_amount['Sweatshirt'] / 2
print(product_amount)

# 5) List Comprehension ყველა key-ს მისაღებად
my_dict = {
    'name': 'Alice',
    'age': 25,
    'city': 'Tbilisi',
    'hobby': 'Reading',
    'language': 'Python'
}

keys_list = [key for key in my_dict]
print(keys_list)

# 6) პროგრამირების ენების სია და ფილტრი
languages = ['Python', 'Java', 'C++', 'Ruby', 'JavaScript', 'Go', 'Swift', 'PHP']

no_a_languages = [lang for lang in languages if 'a' not in lang]
print(no_a_languages)

# 7) ფავორიტ მანქანის ბრენდები და ფილტრი სიმბოლოების მიხედვით
favorite_cars = ['BMW', 'Audi', 'Ford', 'Lexus', 'Tesla', 'Kia', 'Fiat']

short_name_cars = [car for car in favorite_cars if len(car) <= 5]
print(short_name_cars)

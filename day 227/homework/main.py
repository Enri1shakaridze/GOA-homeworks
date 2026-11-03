# 1) რა არის Data hiding პითონში? მოიყვანეთ მაგალითები, რა შემთხვევაშიც შეიძლება გამოგვადგეს ამ პრინციპის გამოყენება.
# ანუ მონაცემთა დაფარვა, მაგალითად შეიძლება გამოგვადგეს მომხმარებლის პაროლის დასაფარად და ა.შ.
# 2) რას ეწოდება Level 1 data hiding? (მაგალითებიც მოიყვანეთ)
# ანუ ესეროვთქვათ 50% იანი დაფარვა კლასის გარეთაც შეგვიძლია მისი გამოძახება და კლასშიც
class Mapss:
    def __init__(self, country, city, location):
        self.country = country
        self.city = city
        self._location = location
    def second(self):
        return self._location

map1 = Mapss('Georgia', 'tbilisi', 800000000000000000000)

print(map1._location)
print(map1.second())
# 3) შექმენით UserInfo კლასი. მიანიჭეთ ატრიბუტები: name, surname, age, address.
# პირველი დონის მონაცემთა დაფარვით - დაფარეთ age და address. შემდეგ გამოიძახეთ იგი ორივე ნასწავლი გზით.
class userInfo:
    def __init__(self, name, username, age, adress):
        self.name = name
        self.username = username
        self._age = age
        self._adress = adress

    def adr(self):
        return self._adress
    def age(self):
        return self._age
user = userInfo('enrike', 'shaakaridze', '15', 'batumi')
print(user._age)
print(user._adress)
print(user.age())
print(user.adr())
# 4) შექმენით Bank კლასი. მიეცით ატრიბუტები: account_name, balance. აქედან account_name და balance Level 1 Hiding-ით დაფარეთ. account_name გამოიძახეთ ფუნქციაში დაძახების გზით, balance-კი პირდაპირ.
class Bank:
    def __init__(self, account_name, balance):
        self._account_name = account_name
        self._balance = balance
    def acc(self):
        return self._account_name
bank1 = Bank('enrooooooo', 1111)
print(bank1.acc())
print(bank1._balance)
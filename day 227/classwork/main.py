# 1) შექმენით Map კლასი. მიანიჭეთ ატრიბუტები: country, city, IP_location.
# პირველი დონის მონაცემთა დაფარვით - დაფარეთ IP_location და შემდეგ გამოიძახეთ იგი ორივე ნასწავლი გზით.

class Map:
    def __init__(self, country, city, IP_location):
        self.country = country
        self.city = city
        self._IP_location = IP_location
    def second(self):
        return self._IP_location

map1 = Map('Georgia', 'batumi', 6010)

print(map1._IP_location)
print(map1.second())

# 2) შექმენით BankAccount კლასი. დაამატეთ ატრიბუტები name, surname, id_number, acc_pass. 
# id_number, acc_pass ატრიბუტები Level 1 hiding-ით დააჰაიდეთ და ორივე გამოიტანეთ ორივე ნასწავლი გზით

class BankAccount:
    def __init__(self, name, surename, id_number, acc_pass):
        self.name = name
        self.surename = surename
        self._id_number = id_number
        self._acc_pass = acc_pass
    
    def first(self):
        return self._id_number
    def second(self):
        return self._acc_pass
bank1 = BankAccount('enrike', 'shakaridze', 61852001234, 309)
print(bank1._id_number)
print(bank1._acc_pass)
print(bank1.first())
print(bank1.second())
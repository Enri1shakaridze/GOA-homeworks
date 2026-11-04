# 1) შექმენით Map კლასი. მიანიჭეთ ატრიბუტები: country, city, IP_location.
# მეორე დონის მონაცემთა დაფარვით - დაფარეთ IP_location და შემდეგ გამოიძახეთ იგი ორივე ნასწავლი გზით (მეთოდით და name mangling-ით).
class Map:
    def __init__(self, country, city, IP_location):
        self.country = country
        self.city = city
        self.__IP_location = IP_location
    
    def Loc(self):
        return self.__IP_location

Map1 = Map('geo', 'batumi', 1111)
print(Map1.Loc())
print(Map1._Map__IP_location)
# 2) შექმენით User_data კლასი. მიეცით ატრიბუტები: name, surname, email, password. აქედან email და პაროლი დაფარეთ (Level 1) და გამოიძახეთ ისინი ფუნქციაში დაძახების გზით. შექმენით ორი ცალკეული ფუნქცია display_email და display_password, ორივე დაფარეთ Level 2 hiding-ით და შემდეგ print- ში გამოიძახეთ.

class User:
    def __init__(self, name, username, email, password):
        self.name = name
        self.username = username
        self._email = email
        self._password = password
    def __em(self):
        return self._email
    def __Pas(self):
        return self._password

user1 = User('enrike', 'shakaridze', 'enrrrrooo@gmail.com', '12345678')

print(user1._User__em())
print(user1._User__Pas())
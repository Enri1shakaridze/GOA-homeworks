# 1) რას ეწოდება Level 2 data hiding? (მაგალითებიც მოიყვანეთ)
# ანუ 100 % დაფარვა კლასისში შეგვიძლია თავისუფლად გამოვიყენოთ კლასის გარეთ კი გამოყენებისას ენკაფსულაცია ხდება
class Car:
    def __init__(self, model, vincode):
        self.model = model
        self.__vincode = vincode

    def Ret(self):
        return self.__vincode
car1 = Car('cls', 'WDDF12K4HHA338612')
print(car1.Ret())
print(car1._Car__vincode)
# 2) რა განსხვავებაა Level 1 და Level 2 data Hiding-ს შორის?
# ერთი არის 50 % დაფარვა მეორე 100% იანი ანუ privat ზეა
# 3) თქვენი სიტყვებით ახსენით რა არის Encapsulation პრინციპი.
# ანუ კლასში როცა ვფარავთ data 2 heading ით მის გარეთ გამოძახება შეზღუდული გვაქ
# 4) დაწერეთ რას ნიშნავს name mangling და რომელ კონკრეტულ შემთხვევებში გვჭირდება მისი გამოყენება.
# როცა გვინდა კლასის გარეთ დავპრინტოთ ან გამოვუყენოთ 100% დაფარული მონაცემი
# 5) შექმენით UserInfo კლასი. მიანიჭეთ ატრიბუტები: name, surname, age, address.
# პირველი დონის მონაცემთა დაფარვით - დაფარეთ age და address. შემდეგ გამოიძახეთ იგი ორივე ნასწავლი გზით.
class uSerInfo:
    def __init__(self, name, surename, age, adress):
        self.name = name 
        self.surename = surename
        self._age = age 
        self._adress = adress
    def r(self):
        return self._age
    def r2(self):
        return self._adress
user1 = uSerInfo('enro', 'shakro', 15, 'betumski')
print(user1.r())
print(user1.r2())
print(user1._age)
print(user1._adress)
# 6) შექმენით Bank კლასი. მიეცით ატრიბუტები: account_name, balance. აქედან account_name დაფარეთ (Level 1), ხოლო balance (Level 2) Hiding-ით. account_name გამოიძახეთ ფუნქციაში დაძახების გზით, balance კი name mangling-ით. 
class Bank:
    def __init__(self, name, balance):
        self._name = name
        self.__balance = balance
    def s(self):
        return self._name
bank1 = Bank('enro', 1111)
print(bank1.s())
print(bank1._Bank__balance)
# 7) შექმენით Book კლასი და გადაეცით: author, bookName, pageAmount. author დამალეთ Level 1-ით. pageAmount კი Level 2-ით. ავტორი გამოიძახეთ კლასის გარეთ (მეთოდის გარეშე). pageAmount კი როგორც მეთოდით, ასევე name mangling-ით. კლასში ასევე შექმენით display_pages მეთოდი, რომელსაც უნდა იყოს Private მეთოდი და აბრუნებდეს pageAmount კუთვნილებას. display_pages მეთოდი name mangling-ით გამოიძახეთ.

class Book:
    def __init__(self, author, bookname, pages):
        self._author = author
        self.bookname = bookname
        self.__pages = pages
    def __display_pages(self):
        return self.__pages
bks1 = Book('random1', 'random2', 'random3')
print(bks1._Book__display_pages())
print(bks1._author)
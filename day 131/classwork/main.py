# data hiding მონაცემთა დაფარვა/დაცვა
# 1 level  protected
# შეგვიძლია კლასშიც და მის გარეთაც გამოვიძახოთ დამალული წევრი

# 2 level  private
# არ შეგვიძლია კლასის გარეთ გამოძახება მხოლოდ ერთი ხერხის გარდა
# name meanling ით შეგვიძლია რომ კლასის გარეთაც გამოვიტანოთ private


# შექმენით Car კლასი ატრიბუტებით (owner_name, plate_number)
# owner name უნდა იყოს protected attribute (Level 1)
# ხოლო plate_number უნდა იყოს private attribute (Level 2)

class Car:
    def __init__(self, owner_name, plate_number):
        self._owner_name = owner_name
        self.__plate_number = plate_number
    
    def display_owner(self):
        return f'owner name: {self._owner_name} plate number: {self.__plate_number}'

# ორივე გამოიტანეთ ტერმინალში. (გამოიყენეთ დამალული ატრიბუტის გამოყენების გზა რაც ვისწავლეთ.)

car1 = Car('Enri', 10)

print(car1._owner_name) 

print(car1.display_owner())

print(car1._Car__plate_number)

# კლასში დაამატეთ display_owner მეთოდი, რომელიც უნდა იყოს private attribute (Level 2) დაცული. იგი გამოიძახეთ name mangling-ის საშუალებით.
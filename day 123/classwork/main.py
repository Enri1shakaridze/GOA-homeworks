# 1) შექმენით Car class, რომელსაც გაუწერთ თვისებებს: name, brand, horsePower, year, color. 
# class-ში ასევე დაამატეთ მეთოდი move(), რომელიც დაბეჭდავს '{car name} is moving' ყოველ გამოძახებაზე.

class Car:
    def __init__(self, name, brand, horsepower, year, color):
        self.name = name
        self.brand = brand
        self.horsepower = horsepower
        self.year = year
        self.color = color

    def move(self):
        return f'{self.name} is moving'

car1 = Car('Mercedes CLS', 'Mercedes', 777, 2016, 'Black')

print("პირველი მანქანა:")
print(f"სახელი: {car1.name}")
print(f"ბრენდი: {car1.brand}")
print(f"ცხენის ძალა: {car1.horsepower}")
print(f"წელი: {car1.year}")
print(f"ფერი: {car1.color}")
print(car1.move())
print('')

car1 = Car('bmw m5', 'bmw', 680, 2019, 'black')
print("პირველი მანქანა:")
print(f"სახელი: {car1.name}")
print(f"ბრენდი: {car1.brand}")
print(f"ცხენის ძალა: {car1.horsepower}")
print(f"წელი: {car1.year}")
print(f"ფერი: {car1.color}")
print(car1.move())
print('')

car1 = Car('porshe 911', 'bporshew', 999, 2022, 'grey')
print("პირველი მანქანა:")
print(f"სახელი: {car1.name}")
print(f"ბრენდი: {car1.brand}")
print(f"ცხენის ძალა: {car1.horsepower}")
print(f"წელი: {car1.year}")
print(f"ფერი: {car1.color}")
print(car1.move())

# დაამატეთ 2 სხვადასხვა მანქანის ცვლადი და გამოიტანეთ თითოეულის თვისება ცალ-ცალკე. ასევე ორივე მანქანაზე გამოიძახეთ move() მეთოდი.
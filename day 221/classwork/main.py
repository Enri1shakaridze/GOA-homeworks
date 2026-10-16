# 1) კომენტარის სახით ახსენით, რას ეწოდება Inheritence? 
# რამდენი ტიპის Inheritence არსებობს? ახსენით თითოეული მათგანი სიტყვიერად.
# მემკვიდრეობას ნიშნავს, გვაქვს 2 ტიპის მემკვიდრეობა multi და multiple level მემკვიდრეობა
# multi level ანუ შვილ კლას ყავს თავისი მშობელი კლასი და მშობელ კლას კიდევ ყავს თავისი მშობელი კლასი
# multiple level ანუ ერთ კლას გადაეცემა ორი მშობელი კლასი
# 2) Multi level Inheritance

# შექმენით კლასი Gadgets, რომელსაც ეყოლება შვილი კლასი Phone-ი. 
# აიღეთ Phone კლასი, დაუმატეთ რამდენიმე თვისება და ერთი მეთოდი, რომელიც გამოიტანს: 'Calling'-ს. და მშობელ კლასად გადაეცით Ios და Android კლასებს

class Gadgets:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

class Phone(Gadgets):
    def Cal(self):
        return 'Calling'

class IOS(Phone):
    pass

class Android(Phone):
    pass

phone1 = IOS('iphone', '16pro', 2025)
phone2 = Android('samsung', 's26', 2025)
print(phone1.Cal())
print(phone1.brand)
print(phone1.model)
print(phone1.year)

print(phone2.Cal())
print(phone2.brand)
print(phone2.model)
print(phone2.year)

# 3) Multiple Level Inheritence

# შექმენით კლასი VacuumCleaner, რომელსაც ექნება Vacuum მეთოდი.
# ასევე, შექმენით Robot კლასი, რომელსაც ექნება DetectObstacle მეთოდი.
# საბოლოოდ, შექმენით RobotVacuum კლასი, რომელიც მიიღებს VacuumCleaner და Robot -ის მეთოდებს მემკვიდრეობით.


class VacuumCleaner:
    def Vacuum(self):
        return 'random'
    
class Robot(VacuumCleaner):
    def DetectObstacle(self):
        return 'random'
    
class RobotVacuum(Robot, VacuumCleaner):
    pass

robot1 = RobotVacuum()
print(robot1.DetectObstacle())
print(robot1.Vacuum())
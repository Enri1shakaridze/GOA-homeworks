# შექმენით მშობელი კლასი სახელად Bird. მას გადაეცით init-ის საშუალებით თვისება name. ასევე მეთოდი eat და sleep.
# Bird-ს ჰყავდეს 2 სტამომავალი კლასი: Seagull და Duck. მათ მიეცით საკუთარი მეთოდი speak. 

class Bird:
    def __init__(self, name):
        self.name = name

    def eat(self):
        return 'bird eat'
    
    def sleep(self):
        return 'bird sleep'
    

class Seaguall(Bird):
    def speak(self):
        return 'chinc chonc'
    
class Duck(Bird):
    def speak(self):
        return 'cwock'

bird1 = Bird('random')

seagusll1 = Seaguall('rendom')
seagusll1.speak()



# გამოიძახეთ შვილი კლასებიდან ყველა შექმნილი მეთოდი
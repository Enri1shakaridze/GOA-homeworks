# 1) შექმენით Programming_language კლასი და გადაეცით თვისებები: user_count, developed_by
# კლასში დაამატეთ staticmethod, რომელიც მიიღებს name და year პარამეტრს და დაბეჭდავს მსგავს წინადადებას: ეს პროგრამირების ენა შეიქმნა ამა და ამ წელს.
# კლასის გარეთ გამოიძახეთ staticmethod, როგორც ინსტანციის გარეშე - ასევე ინსტანციითაც

class programing:  
    def __init__(self, user_count, developed_by):
        self.user_count = user_count
        self.developed_by = developed_by
    @staticmethod
    def results(name,year):
        return f'ეს პროგრამირების ენა {name} შეიქმნა {year} წელს'
print(programing.results('java', 2011))
pro = programing('12', 'enro')
print(pro.results('Java', 2011))
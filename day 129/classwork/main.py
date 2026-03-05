
# super -  როცა გვინდა მშობელი კლასიდან გამდოვიტანოთ შექმნილი ატრიბუტი და ამასტანავე კიდევ დავამატოთ შექმნილი ატრიბუტები შვილი კლასის ისე რომ მნიშვნელობა არ შეცვალოს მშობელის

# შექმენით Movie მშობელი კლასი და გაუწერეთ ატრიბუტი: name.
# ამავე კლასში შექმენით მეთოდი display_info(), რომელიც დაბეჭდავს წინადადებას 'The name of the film is...{name}'

class Movie:
    def __init__(self, name):
        self.name = name

    def display_info(self):
        return f'the name of the film is... {self.name}'


# შექმენით შვილი კლასი და დაარქვით თქვენი საყვარელი ფილმის სახელი. გამოიყენეთ super() მეთოდი, რომ ამ კლასს დაუმატოთ ახალი ატრიბუტები: director, year.

class TheMatrix(Movie):
    def __init__(self, name, director, year):
        super().__init__(name)
        self.director = director
        self.year = year

    def display_info(self):
        super().display_info()
        return f'The name of the film is {self.name}. \n The director is {self.director} \n and it came out in {self.year}'

# display_info() მეთოდი შეცვალეთ Method overriding-ის გარეშე super()-ის გამოყენებით და მან უნდა გამოიტანოს ახალი ინფორმაცია: 'The name of the film is {name}. \n The director is {directr} \n and it came out in {year}.

# parent

movie1 = Movie('the matrix')
print(movie1.display_info())

# child
theM = TheMatrix('the matrix', 'Lilly Wachowski', 2010)
print(theM.display_info())
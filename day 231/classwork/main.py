# 1) შექმენით Movie კლასი(movieTitle, director, year).
# გამოიყენეთ @classmethod, რომ f სტრინგით გამოიტანოთ display_info მეთოდით ფილმის მონაცემები.
class Movie:
    def __init__(self, movieTitle, director, year):
        self.movieTitle=movieTitle
        self.directo=director
        self.year=year
    
    @classmethod
    def Disp_info(cls, movieTitle, director, year):
        return f'title {movieTitle}, director {director}, year {year}'

movie1 = Movie('random', 'random1', 'random2')
print(movie1.Disp_info('random', 'random1', 'random2'))

class Indigo_Cars:
    def __init__(self, company_name, max_dealers, dealers_enrolled):
        self.company_name = company_name
        self.__max_dealers = max_dealers
        self._dealers_enrolled = dealers_enrolled

    def enroll(self):
        return f'სულ დარეგისტრირდა {self._dealers_enrolled} დილერი'
    
    def __check_availability(self):
        if self._dealers_enrolled < self.__max_dealers:
            self._dealers_enrolled += 1
            return f'წარმატებით დარეგისტრირდით. სულ დარჩენილია {self.__max_dealers - self._dealers_enrolled} ადგილი'
        else:
            return 'ადგილი აღარ არის'
        
indigo_cars1 = Indigo_Cars('Indigo', 100, 50)
print(indigo_cars1.enroll())
print(indigo_cars1._Indigo_Cars__check_availability())

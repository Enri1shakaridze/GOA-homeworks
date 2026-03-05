# 2) გაიარეთ Data hiding & class and static methods და აიღეთ Python Intermediate სერთიფიკატი

# 3) შექმენით Person კლასი ატრიბუტებით (name, age, id_number).
# name უნდა იყოს public, age უნდა იყოს protected (Level 1) ხოლო id_number private (Level 2).

class Person:
    def __init__(self, name, age, id_number):
        self.name = name
        self._age = age 
        self.__id_number = id_number

# შექმენით public მეთოდი რომელიც აბრუნებს ასაკს და ცალკე private მეთოდი რომელიც ამოწმებს არის თუ არა პირი სრულწლოვანი გამოიძახეთ id_number  მეთოდი name mangling-ის საშუალებით.

    def public(self):
        return f'Age is {self._age}'
    
    def private(self):
        if self._age > 18:
            return f'user is adult she/her age is {self._age}'

person1 = Person('enri', 15, 61852003396)

print(f'name is {person1.name}')
print("")

print(person1.public())
print(person1._age)
print("")

print(f'id number is {person1._Person__id_number}')
print(person1._Person__id_number)
print("")

# 4) შექმენით Phone კლასი ატრიბუტებით (model, battery_health, serial_number) 
# model იყოს  protected (Level 1)
# battery_health იყოს ასევე protected (Level 1)
# ხოლო  serial_number  - private (Level 2)

class Phone:
    def __init__(self, model, bh, sr_num):
        self._model = model 
        self._bh = bh
        self.__sr_num = sr_num

# შექმენით  charge მეთოდი და private validate_serial_number მეთოდი რომელიც ამოწმებს serial_number კოდის სიგრძეს.  გამოიძახეთ private მეთოდი name mangling-ის გამოყენებით.

    def charge(self):
        return f'bh is {self._bh}'
    
    def validate_serial_number(self):
        return f'serial number length is {len(self.__sr_num)}'

phone1 = Phone('samsung', 99, 'MKZ12390')

print(f'model is {phone1._model}')

print(phone1.charge())

print(phone1.validate_serial_number())

print(f'sr number is {phone1._Phone__sr_num}')
print(phone1._Phone__sr_num)
print("")

# 5) შექმენით OnlineCourse კლასი ატრიბუტებით (course_name, students_enrolled, max_students) 

# course_name იყოს protected (Level 1) 
# students_enrolled იყოს private (Level 2) 
# max_students კი იყოს private ატრიბუტი (Level 2) 
# შექმენით  enroll მეთოდი და private check_availability მეთოდი რომელიც ამოწმებს თავისუფალ ადგილებს გამოიძახეთ private მეთოდი name mangling-ის საშუალებით.

class OnlineCourse:
    def __init__(self, course_name, students_enrolled, max_students):
        self._course_name = course_name
        self.__students_enrolled = students_enrolled
        self.__max_students = max_students

    def enroll(self):
        return f'სულ დარეგისტრირდა {self.__students_enrolled} სტუდენტი'

    def __check_availability(self):
        if self.__students_enrolled < self.__max_students:
            self.__students_enrolled += 1
            return f'წარმატებით დარეგისტრირდით. სულ დარჩენილია {self.__max_students - self.__students_enrolled} ადგილი'
        else:
            return 'ადგილი აღარ არის'


# ასევე გამოიძახეთ course_name, students_enrolled და max_students  ატრიბუტები სფეციალური ხერხის გამოყენებით.

OnlineCourse1 = OnlineCourse('python', 1200, 1450)

print(OnlineCourse1._OnlineCourse__check_availability())
print(OnlineCourse1.enroll())
print('')

print(OnlineCourse1._course_name)
print(OnlineCourse1._OnlineCourse__students_enrolled)
print(OnlineCourse1._OnlineCourse__max_students)
# 1) შექმენი კლასი CurrencyConverter, რომელსაც ექნება კურსები USD_TO_GEL = 2.75, EUR_TO_GEL = 3.00. დაამატეთ სტატიკური მეთოდები:
# to_gel() რომელიც დოლარს ან ევროს გადმოიყვანს ლარში, უცნობი ვალუტის შემთხვევაში კი გამოიტანს ValueError-ს.
# from_gel() - ლარს გადაიყვანს მითითებულ ვალუტაში. 
class CurrencyConverter:
    def __init__(self):
        pass

    @staticmethod
    def to_gel(valute,num):
        if valute == "EUR":
            return round(num * 3.00, 2)
        elif valute == "USD":
            return round(num * 2.75, 2)
        else:
            return ValueError
    def from_gel(valute,num):
        if valute == "EUR":
            return round(num / 3.00, 2)
        elif valute == "USD":
            return round(num / 2.75, 2)
        else:
            return ValueError
inp1 = input('Enter Valute to GEL: ')
inp2 = int(input('Enter number: '))
print(CurrencyConverter.to_gel(inp1,inp2))
print(CurrencyConverter.from_gel(inp1, inp2))

# 2) შექმენით კლასი FileHelper, რომელსაც ექნება შემდეგი სტატიკური მეთოდები:
# get_extension(), რომელიც აბრუნებს ფაილის გაფართოებას (მაგ. 'report.pdf' -> 'pdf', 'doc.docx' -> 'docx'.) თუ გაილს გაფარეთოება არ აქვს, აბრუნებს ცარიელ სტრინგს.
# is_image(), რომელიც ამოწმებს ემთხვევა თუ არა ფაილის გაფართოება ჩამოთვლილთაგან ერთ-ერთს. თუ ემთხვევა ეს იმას ნიშნავს, რომ ფაილი არის ფოტოს ტიპის და აბრუნებს მნიშვნელობა True-ს, სხვა შემთხვევაში False-ს. 
# 'png', 'jpg', 'jpeg', 'gif', 'webp'
# is_office(), რომელიც ამოწმებს ემთხვევა თუ არა ფაილის გაფართოება ჩამოთვლილთაგან ერთ-ერთს. თუ ემთხვევა ეს იმას ნიშნავს, რომ ფაილი არის ფოტოს office აპლიკაციის და აბრუნებს მნიშვნელობა True-ს, სხვა შემთხვევაში False-ს. 
# 'docx', 'pptx', 'xlsx'
class FileHElper:
    def __init__(self):
        pass
    @staticmethod
    def get_extension(text):
        return text.split('.')[1]
    def is_image(text):
        res = ['png', 'jpg', 'jpeg', 'gif', 'webp']
        return True if text.split('.')[1] in res else False
    def is_office(text):
        return True if text.split('.')[1] in ['docx', 'pptx', 'xlsx'] else False

print(FileHElper.get_extension('report.pdf'))
print(FileHElper.is_image('report.gif'))
print(FileHElper.is_office('word.docx'))
print(FileHElper.is_office('word.doc'))
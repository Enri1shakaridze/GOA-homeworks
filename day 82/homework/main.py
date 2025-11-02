# 1) რა დანიშნულება აქვს join და split ფუნქციებს პითონში. ახსენით მათი სინტაქსი და მოიყვანეთ მათი გამოყენების რამოდენიმე მაგალითი.
# split() სტრიქონს ყოფს ნაწილებად (ელემენტებად) გარკვეული გამყოფის მიხედვით და აბრუნებს სიის (list) სახით.
text = "გამარჯობა როგორ ხარ"
parts = text.split()     # იყოფა space-ის მიხედვით
print(parts)
# შედეგი: ['გამარჯობა', 'როგორ', 'ხარ']

# სიაში არსებული სტრიქონების გაერთიანება ერთ სტრიქონად, გარკვეული გამყოფით.

words = ['გამარჯობა', 'როგორ', 'ხარ']
sentence = " ".join(words)
print(sentence)
# შედეგი: "გამარჯობა როგორ ხარ"

# 2) https://www.codewars.com/kata/559ac78160f0be07c200005a/train/python

def name_shuffler(str_):
    b = str_.split()
    name = b[::-1]
    return ' '.join(name)
# 3) https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/python

def string_to_array(s):
    name = s.split()
    if len(s) == 0:
        return [""]
    return name

# 4) https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/python

def reverse_words(text):
    b = text.split(" ")
    name = []
    for i in b:
        name.append(i[::-1])
    return ' '.join(name)
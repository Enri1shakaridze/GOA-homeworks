# .upper() - თუ ჩვენს სტრინგში გვიწერია პატარა ასოები upper-ის გამოყენებით დიდი ასოებით გამოვა ტერმინალში
# .lower()- პირიქით თუ დიდი ასოები წერია დააპატარავებს
# .capitalize() - მხოლოდ პირველ ასოს დიდი ასოთი დაწერს შემდეგს პატარათი
# .find() - საშუალებით ჩვენ შეგვიძლია მოვიძიოთ თუ მერამდენეა ერთერთი ასოჩვენს სთრინგში


name = input("enter your name: ")
print(name.lower())
print(name.upper())
print(name.capitalize())


text1 = input("enter text: ")
text2 = input("enter text: ")
text3 = input("enter text: ")
print(text1.lower())
print(text2.upper())
print(text3.capitalize())




my_name = "enrike"
user_name = input("enter your name: ")


if my_name.lower() == user_name.lower():
    print("Our names are similar!")
elif my_name != user_name:
    print("We have different names!")
    user_name = input("try again: ")
else:
    print(None)

print(user_name)




football = "FOOTBal BeSt PlayEr"
print(football.capitalize())



python = "Python"
print(python.find("t"))



list = ["enrike", "giorgi", "temo", "saba",]
for i in list:
    print(i.upper())
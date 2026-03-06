# isalpha() ამოწმებს სიმბოლოა თუ არა ჩვენი ტექსტი ტერმინალში გამოაგვს boolean ს (true ან False)
# islower() მოწმებს პატარა ასოებით თუ არა ჩვენი ტექსტი ტერმინალში გამოაგვს boolean ს (true ან False)
# isupper()მოწმებს დიდი ასოებით არის თუ არა ჩვენი ტექსტი ტერმინალში გამოაგვს boolean ს (true ან False)

def  manual_swapcase(num):
    if num.islower():
        return num.upper()
    return num.lower()
print(manual_swapcase("HelLo word"))
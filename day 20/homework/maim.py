last_name = "shakaridze"

for i in last_name:
    print(i)


juice_stock = 300

while juice_stock > 0:
    print("You have bought the drink. Drinks left in stock:", juice_stock)
    juice_stock -= 2
print("Out of stock")

for i in range(50, 19, -3):
    print(i)


num = 150

while num >= 0:
    print(num)
    num -= 1

# While loop მუშაობს შემდეგნაირად: სანამ მოცემული პირობა ჭეშმარიტია (True),
#  კოდი ლუპის შიგნით მუდმივად შესრულდება. მაგალითად, თუ გვაქვს while num > 0, 
# სანამ num მეტია 0-ზე, ლუპის შიგნით მოთავსებული კოდი ხელახლა და ხელახლა შესრულდება. 
# როგორც კი პირობა გახდება მცდარი (False), ლუპი შეჩერდება და პროგრამა გადავა შემდეგ ბლოკზე.
# if – ამ ინსტრუქციას ვიყენებთ, რომ შევამოწმოთ კონკრეტული პირობა. თუ პირობა ჭეშმარიტია (True), ის გააქტიურდება და შესრულდება შესაბამისი ბლოკის კოდი.
# elif – ნიშნავს "else if". როცა პირველი პირობა if არ შესრულდება, elif-ის პირობა შემოწმდება. რამდენიმეჯერ შეიძლება გამოვიყენოთ სხვადასხვა პირობის შესამოწმებლად.
# else – თუ არც ერთი პირობა არ შესრულდა, else-ის ბლოკი შესრულდება. ანუ სხვა ყველა შემთხვევაში, რაც არ შედის if და elif-ში.


surename1 = "Shakaridze"
surename2 = input("enter your surename")

if surename1 == surename2:
    print("Our surnames are similar")
else:
    print("Our surnames are not similar")


my_height = 175  
user_height = int(input("Enter your height in cm: "))

if my_height > user_height:
    print("I'm taller than you.")
elif my_height < user_height:
    print("You're taller than me.")
else:
    print("We have equal heights.")

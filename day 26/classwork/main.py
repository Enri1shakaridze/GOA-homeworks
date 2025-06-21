# Python-ში ინდექსირება გულისხმობს კონკრეტული ელემენტის მიღების პროცესს თანმიმდევრობითი ტიპის მონაცემებიდან, როგორიცაა სტრიქონი ან სია, მისი მდებარეობის ანუ ინდექსის ნომრის გამოყენებით
products = ["apples", "oranges", "bananas", "Melon"]
products[3] =  "lime"
print(products[2]) # ეს კოდი გამოიტანს bananas

sentence = "GOA is the best"
print(sentence[0] + sentence[1] + sentence[2])


month = "august"
month[0] = "A" #Python-ში სტრიქონები (strings) არიან უცვლადობადი ტიპები  ანუ immutable.
# ეს ნიშნავს, რომ ერთი ელემენტის პირდაპირ შეცვლა სტრიქონში შეუძლებელია.
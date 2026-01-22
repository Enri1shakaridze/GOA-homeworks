# Filter ის გამოყენებით:
# 1) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] დატოვე მხოლოდ ის ენები რომლების სიგრძეც მეტია 5ზე.

languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]

len_five = list(filter(lambda x: len(x) > 5, languages))
print(len_five)

# 2) foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]
# სიიდან დატოვე მხოლოდ ჯანსაღი საკვები —> H

foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]
foodsH = list(filter(lambda i: i[-1] == 'H', foods))
print(foodsH)

# Map ის გამოყენებით:
# 3) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] თითოეულ ელემენტს წინ დაუმატეთ "I study"

languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]
concatination = list(map(lambda j: 'I study ' + j, languages))
print(concatination)


# 4) minutes = [60, 120, 180, 240, 30] მოცემულია წუთები სიაში,map() ის გამოყენებით წუთები გადაიყვანეთ საათებში და დაპრინტეთ
# Hint: hours = minutes / 60

minutes = [60, 120, 180, 240, 30]
hours = list(map(lambda z: z / 60, minutes))
print(hours)
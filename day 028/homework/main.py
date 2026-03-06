# Slicing ვიყენებთ იმისთვის, რომ სტრინგიდან ან სიიდან ავიღოთ კონკრეტული ნაწილი (ქვეჯგუფი).
# ეს გვეხმარება მონაცემების ნაწილობრივ წვდომასა და მანიპულაციაში.
# მაგალითად: პირველი 5 ელემენტის მიღება, სიტყვების გამოყოფა, უკუღმა წაკითხვა და სხვა.

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
first_five = numbers[:5]
print(first_five)


text = "Goal-Oriented Academy"
academy = text[-7:]
print(academy)


text = "Goal-Oriented Academy"
oriented = text[5:13]
print(oriented)



lastname = "Gelashvili"
first_letter = lastname[0]
middle_letter = lastname[-1]
last_letter = lastname[5]

print("პირველი:", first_letter)
print("შუა:", middle_letter)
print("ბოლო:", last_letter)


colors = ["Black", "Yellow", "Blue", "Purple", "Orange"]
selected_colors = colors[0:2] 
print(selected_colors)



greeting = "Hello, World!"
hello = greeting[:5]
world = greeting[7:]

print("Hello:", hello)
print("World:", world)
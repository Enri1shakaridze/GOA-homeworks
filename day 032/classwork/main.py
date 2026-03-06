number1 = int(input("enter number: "))
number2 = int(input("enter number: "))
number3 = int(input("enter number: "))
number4 = int(input("enter number: "))
number5 = int(input("enter number: "))
numbers = [number1, number2, number3, number4, number5]
print(numbers[1:3])


alphabet ="abcdefghijklmnopqrstuvwxyz"
alphabet1 = alphabet[0:5]
alphabet2 = alphabet[-5:]
print(alphabet1)
print(alphabet2)
alphabet3 = alphabet1[::-1]
alphabet4 = alphabet2[::-1]
alphabets = alphabet3 + alphabet4
print(alphabets)


text = "IndexingAndSlicingIsPowerful"
text1 = text[0:8]
print(text1)

products1 = input("enter product name: ")
products2 = input("enter product name: ")
products3 = input("enter product name: ")
products4 = input("enter product name: ")
products5 = input("enter product name: ")

products = [products1, products2, products3, products4, products5]
products_all = products[::-1]
print(products_all[-3:])
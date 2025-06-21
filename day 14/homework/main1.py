# შედარების და ლოგიკური ოპერაციების გამოყენებისას ყოველთვის ვიღებთ True dა False ს ანუ boolean ს

True and True   # → True
True and False  # → False
False and True  # → False
False and False # → False

# or:
True or True    # → True
True or False   # → True
False or True   # → True
False or False  # → False


print(False or True and True and False) # False

print(True and False or False or True) # True

print(True or True and False or True or False and True or False) # True


temperature = int(input("enter temperature in celsius: "))
cooling_on = temperature > 30
print(cooling_on)

temp_celsius = int(input("enter temperature in celsius: "))
temp_fahrenheit = 89.6
cooling_on2 = (temp_celsius * 1.8 + 32 ) > temp_fahrenheit
print(cooling_on2)
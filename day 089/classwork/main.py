# # 1) https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/python

# # ეს kata ამოხსენით მინიმუმ 4 სხვადასხვა ვარიანტით

# 1)

def swap_values(args): 
    c = args[0]
    args[0] = args[1]
    args[1] = c
    return args

# 2)

def swap_values(args): 
    args[0], args[1] = args[1], args[0]

# 3)

def swap_values(args): 
    i = 0
    while i < 1:
        b = args[i]
        args[i] = args[i + 1]
        args[i + 1] = b
        i += 1

# 4)

def swap_values(args): 
    args[0], args[1] = args[::-1]

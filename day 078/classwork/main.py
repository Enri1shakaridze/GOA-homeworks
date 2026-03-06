#  .replace() ვიყენებთ სტრინგებზე, გადაეცემა 2 არგუმენტი, პირველ არგუმენტს გადაეცემა რა უნდა ჩავანაცვლოთ მეორე რითი უნდა ჩავანაცვლოთ

# 1) https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/python

def remove_exclamation_marks(s):
    return s.replace("!", "")

# 2) https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/python

def correct(s):
    return s.replace("5", "S").replace("0", "O").replace("1", "I")

# 3) https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/python

def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]
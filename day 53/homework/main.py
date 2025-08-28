# 1) https://www.codewars.com/kata/5a360620f28b82a711000047/train/python

def define_suit(card):
    if card[-1] == 'S':
        return 'spades'
    elif card[-1] == 'H':
        return 'hearts'
    elif card[-1] == 'D':
        return 'diamonds'
    elif card[-1] == 'C':
        return 'clubs'
    else:
        None

#  2) https://www.codewars.com/kata/5966e33c4e686b508700002d/train/python

def sum_str(a, b):
    return str(int(a or 0) + int(b or 0))

# 3) https://www.codewars.com/kata/582dafb611d576b745000b74/train/python

def quote(fighter):
    if fighter.lower() == 'george saint pierre':
        return "I am not impressed by your performance."
    elif fighter.lower() == 'conor mcgregor':
        return "I'd like to take this chance to apologize.. To absolutely NOBODY!"

# 4) https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/python

def remove_char(s):
    return s[1:-1]

# 5) https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/python
def findSmallestInt(arr):
    return min(arr)
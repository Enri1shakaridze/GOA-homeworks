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
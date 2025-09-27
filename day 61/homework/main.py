# 1) https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/python

def sp_eng(sentence): 
    name = "english"
    if name in sentence.lower():
        return True
    else:
        return False

# 2) https://www.codewars.com/kata/5866fc43395d9138a7000006/train/python

def ensure_question(s):
    if s.endswith("?"):
        return s
    else:
        return s + "?"

# 3) https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/train/python

def switch_it_up(number):
    if number == 0:
        return "Zero"
    elif number == 1:
        return "One"
    elif number == 2:
        return "Two"
    elif number == 3:
        return "Three"
    elif number == 4:
        return "Four"
    elif number == 5:
        return "Five"
    elif number == 6:
        return "Six"
    elif number == 7:
        return "Seven"
    elif number == 8:
        return "Eight"
    elif number == 9:
        return "Nine"

# 4) https://www.codewars.com/kata/5808e2006b65bff35500008f/train/python

def position(letter):
    if letter == "a":
        return "Position of alphabet: 1"
    elif letter == "b":
        return "Position of alphabet: 2"
    elif letter == "c":
        return "Position of alphabet: 3"
    elif letter == "d":
        return "Position of alphabet: 4"
    elif letter == "e":
        return "Position of alphabet: 5"
    elif letter == "f":
        return "Position of alphabet: 6"
    elif letter == "g":
        return "Position of alphabet: 7"
    elif letter == "h":
        return "Position of alphabet: 8"
    elif letter == "i":
        return "Position of alphabet: 9"
    elif letter == "j":
        return "Position of alphabet: 10"
    elif letter == "k":
        return "Position of alphabet: 11"
    elif letter == "l":
        return "Position of alphabet: 12"
    elif letter == "m":
        return "Position of alphabet: 13"
    elif letter == "n":
        return "Position of alphabet: 14"
    elif letter == "o":
        return "Position of alphabet: 15"
    elif letter == "p":
        return "Position of alphabet: 16"
    elif letter == "q":
        return "Position of alphabet: 17"
    elif letter == "r":
        return "Position of alphabet: 18"
    elif letter == "s":
        return "Position of alphabet: 19"
    elif letter == "t":
        return "Position of alphabet: 20"
    elif letter == "u":
        return "Position of alphabet: 21"
    elif letter == "v":
        return "Position of alphabet: 22"
    elif letter == "w":
        return "Position of alphabet: 23"
    elif letter == "x":
        return "Position of alphabet: 24"
    elif letter == "y":
        return "Position of alphabet: 25"
    elif letter == "z":
        return "Position of alphabet: 26"
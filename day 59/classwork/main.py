# 1) https://www.codewars.com/kata/59126992f9f87fd31600009b/train/python

def whose_move(last_player, win):
    if win == True:
        return last_player
    else:
        pass
    if last_player == "black":
        return "white"
    else:
        return "black"
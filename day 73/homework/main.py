# 1) https://www.codewars.com/kata/563e320cee5dddcf77000158

def get_average(marks):
    return sum(marks) // len(marks)

# 2) https://www.codewars.com/kata/5672a98bdbdd995fad00000f

def rps(p1, p2):
    if p1 == p2:
        return "Draw!"
    elif p1 == "scissors" and p2 == "paper":
        return "Player 1 won!"
    elif p1 == "scissors" and p2 == "rock":
        return "Player 2 won!"
    elif p1 == "rock" and p2 == "scissors":
        return "Player 1 won!"
    elif p1 == "paper" and p2 == "rock":
        return "Player 1 won!"
    else:
        return "Player 2 won!"

# 3) https://www.codewars.com/kata/52ceafd1f235ce81aa00073a

def plural(n):
    return n != 1

# 4) https://www.codewars.com/kata/56f6ad906b88de513f000d96

def bonus_time(salary, bonus):
    if bonus == False:
        return f"${salary}"
    else:
        return f"${salary *10}"

# 5) https://www.codewars.com/kata/5625618b1fe21ab49f00001f 

def say_hello(name):
    return f"Hello, {name}"
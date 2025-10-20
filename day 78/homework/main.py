# 8kyu
# ----
# 1) https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/python

def _if(bool, func1, func2):
    if bool:
        func1()
    else:
        func2()

# 2) https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/python

def find_needle(haystack):
    name =  haystack.index("needle")
    return f"found the needle at position {name}"

# 3) https://www.codewars.com/kata/51f9d93b4095e0a7200001b8/train/python

def how_many_light_sabers_do_you_own(name=""):
    return 18 if name == "Zach" else 0


# 7kyu
# ----
# 4) https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/python

def open_or_senior(data):
    res = []
    for age, handicap in data:
        if age >= 55 and handicap > 7:
            res.append('Senior')
        else:
            res.append('Open')
    return res
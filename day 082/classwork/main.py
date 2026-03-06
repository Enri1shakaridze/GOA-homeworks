# 1) https://www.codewars.com/kata/570597e258b58f6edc00230d/train/python

def array(string):
    name = string.split(',')
    if len(name) > 2:
        return " ".join(name[1:-1])
    else:
        return None
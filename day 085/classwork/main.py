# https://www.codewars.com/kata/55908aad6620c066bc00002a/train/python

def xo(s):
    s = s.lower()
    if s.count("x") == s.count("o"):
        return True
    return False


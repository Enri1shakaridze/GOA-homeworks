# 1) https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/python

def is_square(n):
     return n >= 0 and int(n ** 0.5) ** 2 == n

# 2) https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/python

def sum_of_minimums(numbers):
    total = 0
    for i in numbers:
        minn = min(i)
        total += minn
    return total

# 3) https://www.codewars.com/kata/546e2562b03326a88e000020/train/python

def square_digits(num):
    num_str = str(num)
    
    result_str = ""

    for digit in num_str:
        digit_int = int(digit)
        squared_value = digit_int ** 2
        result_str += str(squared_value)
    return int(result_str)

# 4) https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/python

def remove_url_anchor(url):
    return url.split("#")[0]

# 5) https://www.codewars.com/kata/5a03b3f6a1c9040084001765/train/python

def angle(n):
    return 180 * (n -2)
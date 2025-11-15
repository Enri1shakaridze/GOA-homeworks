# 7kyu:

# 1) https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/python

def get_count(sentence):
    a = 'aeiou'
    count = 0
    for i in sentence:
        if i in a:
            count += 1
    return count

# 2) https://www.codewars.com/kata/52f3149496de55aded000410/train/python

def sum_digits(number):
    number = str(number)
    count = 0

    if number[0] == '-':
        number = number[1:]

    for digit in number:
        count += int(digit)
    return count

# 3) https://www.codewars.com/kata/58daa7617332e59593000006/train/python

def find_longest(arr):
    longest = arr[0]
    for num in arr[1:]:
        if len(str(num)) > len(str(longest)):
            longest = num
    return longest

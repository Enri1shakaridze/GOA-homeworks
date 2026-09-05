# 1) https://www.codewars.com/kata/546e2562b03326a88e000020/train/python
def square_digits(num):
    num_str = str(num)
    
    result_str = ""

    for digit in num_str:
        digit_int = int(digit)
        squared_value = digit_int ** 2
        result_str += str(squared_value)
    return int(result_str)
# 2) https://www.codewars.com/kata/56747fd5cb988479af000028/train/python
def get_middle(s):
    a = int(len(s) / 2 - 1)
    c = int(len(s) / 2 + 1)
    f = int(len(s) / 2 - 0.5)
    for i in s:
        if len(s) % 2 == 0:
            return s[a:c]
        else:
            return s[f]
# 3) https://www.codewars.com/kata/514a024011ea4fb54200004b/train/python
def domain_name(url):
    url = url.replace("http://", "").replace("https://", "")
    if url.startswith("www."):
        url = url[4:]
    return url.split("/")[0].split(".")[0]
# 4) https://www.codewars.com/kata/52449b062fb80683ec000024/train/python

def generate_hashtag(s):
    words = s.split()
    if not words:                
        return False

    hashtag = '#' + ''.join(w.capitalize() for w in words)
    return hashtag if len(hashtag) <= 140 else False
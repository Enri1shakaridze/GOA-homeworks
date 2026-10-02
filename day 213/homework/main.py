# 1) https://www.codewars.com/kata/5503013e34137eeeaa001648/train/python
def diamond(n):
    if n < 0 or n % 2 == 0:
        return None

    res = ''

    for i in range(1, n + 1, 2):
        r = (n - i) // 2
        res += ' ' * r + '*' * i + '\n'

    for i in range(n - 2, 0, -2):
        r = (n - i) // 2
        res += ' ' * r + '*' * i + '\n'

    return res
# 2) https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/python
def create_phone_number(nums):
    nums = ''.join(str(d) for d in nums)
    return f"({nums[0:3]}) {nums[3:6]}-{nums[6:10]}"
# 3) https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/python
def nb_year(p0, percent, aug, p):
    year = percent / 100
    res = 0
    while p > p0:
        p0 = int(p0 + (p0 * year) + aug)
        res+=1
        
    return res
# 4) https://www.codewars.com/kata/552564a82142d701f5001228/train/python
def discover_original_price(discounted_price, sale_percentage):
    return discounted_price / (1 - sale_percentage / 100)
# BONUS:
# https://www.codewars.com/kata/5902bc7aba39542b4a00003d/train/python
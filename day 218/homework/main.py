# https://www.codewars.com/kata/541a354c39c5efa5fa001372/train/javascript

# function ipToNum(ip) {
#   ip = ip.split('.')
#   let res = 0
#   res += Number(ip[0]) * 16777216
#   res += Number(ip[1]) * 65536
#   res += Number(ip[2]) * 256
#   res += Number(ip[3]) * 1
#   return res
# }

# function numToIp(num) {
#     let w = Math.floor(num / (256**3) )      
#     let x = Math.floor((num / (256**2)) % 256) 
#     let y = Math.floor((num / 256) % 256)
#     let z = num % 256     
    
#     return `${w}.${x}.${y}.${z}`
# }



# https://www.codewars.com/kata/541a354c39c5efa5fa001372/train/python

def ip_to_num(ip):
    ip = ip.split('.')
    res = 0
    res += int(ip[0]) * 16777216
    res += int(ip[1]) * 65536
    res += int(ip[2]) * 256
    res += int(ip[3]) * 1
    return res

def num_to_ip(num):
    w = num // (256**3)       
    x = (num // (256**2)) % 256 
    y = (num // 256) % 256
    z = num % 256     
    
    return f"{w}.{x}.{y}.{z}"
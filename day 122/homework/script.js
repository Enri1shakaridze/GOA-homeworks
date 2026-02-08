// 1) https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
    let result = []
    for(let i = 0; i < l.length; i++){
    if(typeof l[i] === 'number' ){
        result.push(l[i])
    }
    }
    return result
}

// 2) https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

function findSmallestInt(arr) {
    let res = 100000000000000000000
    for(let item = 0; item < arr.length; item++){
    if (arr[item] < res){
        res = arr[item]
    }
    }
    return res
}

// 3) https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
    let x = 0
    let o = 0
    
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'x'){
        x += 1
        }
        if(str[i] == 'o'){
        o += 1
        }
    }
    if(x == o){
        return true
    }else{
        return false
    }
}
// 4) https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){
    return str.endsWith(ending)
}

// 5) https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function solution(str, ending){
    return str.endsWith(ending)
}
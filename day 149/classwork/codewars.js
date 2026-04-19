// 1) https://www.codewars.com/kata/538835ae443aae6e03000547/train/javascript

function add(n) {
    function res(x){
        return x + n
    }
    return res
}

// 2) https://www.codewars.com/kata/52dbae61ca039685460001ae/train/javascript

function change(string){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let st = string.toLowerCase()
    let res = '';
    for(let i = 0; i < alphabet.length; i++){
        if(st.includes(alphabet[i])){
            res += '1'
        }else{
            res += '0'
    }
    }
    return res
}
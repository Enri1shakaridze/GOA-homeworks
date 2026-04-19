// შეასრულეთ მოცემული codewars-ები JavaScript-ით:

// 1) https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {

    let sum = classPoints.reduce((acc, cur) => acc + cur, 0)
    let name = sum / classPoints.length
    
    return yourPoints > name 
}
// 2) https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
    let count = 0
    for(let i of str.toLowerCase()){
        if('aeiou'.includes(i)){
            count += 1
        }
    }
    return count
}

// 3) https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    let year = 0;
    let z = percent / 100
    
    while (p0 < p) {
        p0 = Math.floor(p0 + (p0 * z) + aug);
        year++;
    }
    
    return year;
}

// 4) https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/train/javascript

function generateShape(integer){
    let res = '';
    for(let i = 0; i < integer; i++){
    for(let x = 0; x < integer; x++){
        res += '+'
    }
    res += '\n'
    }
    let res2 = '';
    for(let j = 0; j < res.length - 1; j ++){
        res2 += res[j]
    }
    return res2
}

// 5) https://www.codewars.com/kata/5813d19765d81c592200001a/train/javascript

function dontGiveMeFive(start, end){
    let count = 0;
    for(let i = start; i <= end; i++){
        if(!i.toString().includes('5')){
            count ++
        }
    }
    return count
}
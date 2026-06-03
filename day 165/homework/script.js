// 1) https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

function isIsogram(str){
    str = str.toLowerCase();
    return new Set(str).size === str.length
}

// 2) https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

function fizzbuzz(n){
    let res = [];
    for(let i = 1; i < n +1; i++){
        console.log(i)
        if(i % 3 === 0 && i % 5 === 0){
            res.push("FizzBuzz");
        }
        else if(i %3 === 0){
            res.push('Fizz')
        }
        else if(i % 5 === 0){
            res.push('Buzz')
        }
        else{
            res.push(i)
        }
        
        }
    return res
}

// 3) https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

function twoOldestAges(ages){
    let a = ages.sort((a, b) => a - b);

    return [a[a.length - 2], a[a.length-1]]
}


// 4) https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

function squares(x, n) {
    let res = [];
    for(let i = 1; i< n+1;i++){
        res.push(x)
        x = x * x
    }
    return res
}

// 5) https://www.codewars.com/kata/57f59da8d3978bb31f000152/train/javascript

// დაასრულეთ საკლასო:
// https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript


function mostFrequentItemCount(collection) {

    let count = 0;
    for(let num of collection){
        let i = collection.filter((x) => x === num);
        if(i.length > count){
            count = i.length
    }

    }
    return count
}
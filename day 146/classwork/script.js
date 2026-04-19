// 1)https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

function solution(nums){
    if(nums === null || nums.length <= 0){
        return []
    }
    return nums.sort((a,b) => a - b)
}

// 2)https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

function solution(str, ending){
    return str.endsWith(ending)
}

// 3)https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {  
    let num = numbers.sort((a, b) => a - b)
    return num[0] + num[1]
}

// 4)https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

function sum (numbers) {
    return numbers.length === 0 ? 0 : numbers.reduce((acc, cur) => acc + cur, 0)
}

// 5)https://www.codewars.com/kata/514a6336889283a3d2000001/train/javascript

function getEvenNumbers(numbersArray){
    let num = numbersArray.filter((x) => x % 2 === 0)
    return num
}
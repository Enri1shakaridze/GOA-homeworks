// 1) https://www.codewars.com/kata/59441520102eaa25260000bf/train/javascript

function unusualFive() {
    return 'eeeee'.length
}

// 2) https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
    if(bonus === true){
    return `£${salary}0`
    } else{
    return `£${salary}`
    }
    
}

// 3) https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    let num = numbers.split(' ')
    let min = num[0]
    let max = num[0]
    for(let i = 0; i < num.length; i++){
        if(Number(num[i]) <= min){
        min = num[i]
        }
        }
    for(let i = 0; i < num.length; i++){
        if(Number(num[i]) >= max){
        max = num[i]
    }
    }
    return `${max} ${min}`
}
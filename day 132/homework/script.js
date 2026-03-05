// შეასრულეთ განსხვავებული გზით:
// 1) https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers){
    let neww = numbers.split(' ').map((x) => Number(x))
    let new_sort = neww.sort((a, b) => a - b)
    let max = new_sort[new_sort.length - 1]
    let min = new_sort[0]
    return `${max} ${min}`
}

// ---------------



// 2) https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/javascript

function sameCase(a, b) {
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    
    if(upper.includes(a) && upper.includes(b)){
    return 1
    }
    if(lower.includes(a) && lower.includes(b)){
    return 1
    }
    if(upper.includes(a) && lower.includes(b)){
    return 0
    }
    if(lower.includes(a) && upper.includes(b)){
    return 0
    }
    return -1
    
}

// 3) https://www.codewars.com/kata/57eeb8cc5f79f6465a0015c1/train/javascript

function isKiss( words ){
    let w = words.split(' ');
    let num = w.length;
    
    for(let i = 0; i < w.length; i++){
    if(w[i].length > num){
        return "Keep It Simple Stupid"
    }
    }
    return "Good work Joe!"
}

// 4) https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

function isPalindrome(x) {
    let lower = x.toLowerCase();
    let n = lower.split('').reverse().join('');
    return n === lower;
}

// 5) https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

const rps = (p1, p2) => {
    if (p1 === p2) {
    return "Draw!";
    } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
    } else if (p1 === "scissors" && p2 === "rock") {
    return "Player 2 won!";
    } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
    } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
    } else {
    return "Player 2 won!";
    }
};

// 6) https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

var isAnagram = function(test, original) {
    let l = test.toLowerCase()
    let o = original.toLowerCase()
    return l.split('').sort().join('') === o.split('').sort().join('')
};

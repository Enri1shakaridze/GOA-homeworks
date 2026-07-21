// 1) დაასრულეთ ჯგუფური პროექტი და პერსონალური პროექტი.

// შეასრულეთ 6kyu codewars:
// 2) https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr, n) {
    let a = []
    for (let i = 0; i < arr.length; i++) {
        let z = a.filter(x => x === arr[i])
        console.log(z)
        if (z.length < n) {
            a.push(arr[i])
        }
    }
    return a
}
// 3) https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

function likes(names) {
    let l = names.length
    if (l === 0) {
        return 'no one likes this'
    }
    else if (l === 1) {
        return `${names[0].toString()} likes this`
    }
    else if (l === 2) {
        return `${names[0].toString()} and ${names[1].toString()} like this`
    }
    else if (l === 3) {
        return `${names[0].toString()}, ${names[1].toString()} and ${names[2].toString()} like this`
    }
    else {
        return `${names[0].toString()}, ${names[1].toString()} and ${l - 2} others like this`
    }
}

// 4) https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number) {
    if (number <= 0) {
        return 0;
    }
    let res = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            res += i;
        }
    }
    return res;
}

// 5) https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
// 1) https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
function nthEven(n) {
    return (n - 1) * 2
}
// 2) https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript
function findDup(arr) {
    arr.sort((a, b) => a - b);

    const set = new Set(arr);

    return arr.reduce((sum, x) => sum + x, 0) - [...set].reduce((sum, x) => sum + x, 0);
}
// 3) https://www.codewars.com/kata/552564a82142d701f5001228/train/javascript
function discoverOriginalPrice(discountedPrice, salePercentage) {
    return discountedPrice / (1 - salePercentage / 100);
}
// 4) https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript
function fizzbuzz(n) {
    let res = [];
    for (let i = 1; i < n + 1; i++) {
        console.log(i)
        if (i % 3 === 0 && i % 5 === 0) {
            res.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            res.push('Fizz')
        }
        else if (i % 5 === 0) {
            res.push('Buzz')
        }
        else {
            res.push(i)
        }

    }
    return res
}
// 5) https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
        let rep = A.filter(x => x === A[i])
        if (rep.length % 2 !== 0) {
            return A[i]
        }
    }
}
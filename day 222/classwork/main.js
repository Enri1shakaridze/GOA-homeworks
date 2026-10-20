// 1) https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript
function xor(a, b) {
    return a != b
}
// 2) https://www.codewars.com/kata/5963c18ecb97be020b0000a2/train/javascript
function derive(coefficient, exponent) {
    return `${String(Number(coefficient) * Number(exponent))}x^${Number(exponent) - 1}`
}
// 3) https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
function oddCount(n) {
    let r = n / 2
    r = String(r).split('.')
    r = r[0]
    return Number(r)
}
// 4) https://www.codewars.com/kata/56a921fa8c5167d8e7000053/train/javascript
function password(str) {
    let q = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let r = 'abcdefghijklmnofqrstuvwxyz'
    let n = '1234567890'

    if (str.length < 8) return false

    let upper = false;
    let lower = false;
    let num = false;

    for (let a of str) {
        if (q.includes(a)) {
            upper = true
        }
        else if (r.includes(a)) {
            lower = true
        }
        else if (n.includes(a)) {
            num = true
        }

    }
    return upper && lower && num
}
// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript
function solve(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.includes(arr[i])) {
            res = res.filter(x => x !== arr[i])
            res.push(arr[i])
        } else {
            res.push(arr[i])
        }
    }
    return res
}
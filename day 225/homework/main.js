// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript [5kyu]
function pigIt(str) {
    str = str.split(' ')
    let res = []
    console.log(str)


    for (let i = 0; i < str.length; i++) {
        let r = str[i].slice(1, str[i].length)
        console.log(r)
        r += str[i][0]
        console.log(r)
        if (/^[A-Za-z]+$/.test(str[i])) {

            r += 'ay'
        }
        res.push(r)
    }
    return res.join(' ')
}
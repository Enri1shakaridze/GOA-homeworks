
// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let res = ''
    text = text.toLowerCase()
    text = text.split('')
    for (let i = 0; i < text.length; i++) {
        if (alpha.includes(text[i])) {
            res += String(alpha.indexOf(text[i]) + 1) + ' '
        }
    }

    return res.slice(0, res.length - 1)
}
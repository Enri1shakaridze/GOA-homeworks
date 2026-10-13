
// 1) შეასრულეთ თქვენი სურვილით არჩეული ნებისმიერი 5kyu ჯავასკრიპტით.
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
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
// 2) შეასრულეთ ეს 6kyu ამოცანა Js-ით:
// https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript

function findChildren(dancingBrigade) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let res = [];

  dancingBrigade = dancingBrigade.toLowerCase();

  for (let i = 0; i < dancingBrigade.length; i++) {
    if (alphabet.includes(dancingBrigade[i])) {
      res.push(alphabet.indexOf(dancingBrigade[i]));
    }
  }

  res.sort((a, b) => a - b);

  let res3 = '';

  for (let i = 0; i < res.length; i++) {
    let char = alphabet[res[i]];

    if (i === 0 || char !== alphabet[res[i - 1]]) {
      res3 += char.toUpperCase();
    } else {
      res3 += char;
    }
  }

  return res3;
}
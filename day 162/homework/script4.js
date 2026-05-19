
// 4) შექმენი ცვლადი ტექსტით: const message = "JavaScript is cool!".
// setInterval- ის გამოყენებით, ყოველ 0.5 წამში ეკრანზე გამოაჩინე ამ ტექსტის მომდევნო ასო (ჯერ "J", შემდეგ "Ja", შემდეგ "Jav"...). როდესაც მთლიანი წინადადება დაიბეჭდება, გამოიყენე clearInterval, რათა კოდი შეწყდეს.

let p = document.getElementById('paragrafh2');

const message = "JavaScript is cool!"
let num = 0;
let res = ''
let c = setInterval(() => {
    res += message[num];
    p.textContent = res
    num++
}, 500);

setTimeout(() => {
    clearInterval(c);
}, (message.length + 1) * 500)
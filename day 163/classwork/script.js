// შექმენი ცვლადი ტექსტით: const message = "This is Group 71".
// setInterval- ის გამოყენებით, ყოველ 0.4 წამში ეკრანზე გამოაჩინე ამ ტექსტის მომდევნო ასო (ჯერ "T", შემდეგ "Th", შემდეგ "Thi"...). 
// დააბრუნეთ წინადადება აწყის ადგილას. ანუ კოდმა უნდა დაიწყოს პირიქით წაშლა სიმბოლოების მიხედვით. როდესაც მთლიანი წინადადება წაიშლება, გამოიყენე clearInterval, რათა კოდი შეწყდეს.
const message = "This is Group 71"

let timee = document.getElementById('timee');
let num = 1;
let res = '';
let tr = false;
const intervall = setInterval(() => {
    res = message.slice(0, num)
    timee.textContent = res;
    if(timee.textContent === "This is Group 71"){
        tr = true;
    }

    if(tr){
        num--;
    }else{
        num++;
    }
    if(num === -1){
        num = 1;
        tr = false;
    }
}, 40);
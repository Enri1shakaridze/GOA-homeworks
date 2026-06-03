
// 3) შექმენი მასივი, რომელშიც შეინახავ 5 სხვადასხვა ფერს. setInterval-ის გამოყენებით ყოველ 1.5 წამში შეცვალე საიტის ფონის ფერი მასივიდან მორიგი ფერით. მას შემდეგ, რაც პროგრამა ყველა ფერს ერთხელ მაინც გადაატრიალებს (ანუ 5-ვე ფერი გამოჩნდება), ინტერვალი უნდა გაჩერდეს.

document.body.style.backgroundColor = 'grey'
let array = ['black', 'green', 'red', 'white', 'blue']
let num = 0;
let color = setInterval(() => {
    document.body.style.backgroundColor = `${array[num]}`
    num++;
    if(document.body.style.backgroundColor === array[array.length + 1]){
        clearInterval(color);
    }
}, 1500);

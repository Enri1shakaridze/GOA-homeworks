// 1) შექმენი პროგრამა, რომელიც ეკრანზე გამოაჩენს ციფრს 10. setInterval-ის გამოყენებით ყოველ 1 წამში ეს ციფრი უნდა შემცირდეს 1-ით (9, 8, 7...). როდესაც ტაიმერი ჩამოვა 0-ზე, ინტერვალი უნდა გაჩერდეს (clearInterval) და ეკრანზე დაიბეჭდოს შეტყობინება: 'Time is up!'



let p = document.getElementById('paragrafh2');
let num = 10;
p.textContent = num;
let a = setInterval(() => {
    num--;
    p.textContent = num
}, 1000);

setTimeout(() => {
    clearInterval(a);
    p.textContent = 'Time is up'
}, 10000)
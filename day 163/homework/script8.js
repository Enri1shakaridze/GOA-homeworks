
// 8) შექმენი საწყისი ფასი, მაგალითად 100$. ყოველ 1 წამში ფასი შემთხვევითად ან იზრდება 1-დან 5 დოლარამდე, ან იკლებს. ყოველ წამს დაბეჭდე ახალი ფასი. თუ ფასი ჩამოცდება 80$-ს ან ავა 120$-ზე გააჩერე ინტერვალი და დაბეჭდე საბოლოო შედეგი.


let price = 100;

let a = setInterval(() => {
    let a = Math.floor(Math.random() * 2)
    let num;
    if(a === 0){
        num = Math.floor(Math.random() * 5);
        if(num === 0){
            num = 1
        }
        price -= num;
        console.log(`price ${price}`)
    }
    if(a === 1){
        num = Math.floor(Math.random() * 5);
        if(num === 0){
            num = 1
        }
        price += num;
        console.log(`price ${price}`)
    }
    if(price <= 80 || price >= 120){
        console.log('done')
        clearInterval(a)
    }
}, 1000);
// 1) კომენტარების სახით დეტალურად ახსენით რა არის და რისთვის გამოიყენება promise - ები (თავისი მდგომარეობებით, .then, .catch და .finally მეთოდებიც).

// promise არის რაიმე დაპირება მას გააჩნია 3 მნიშვნელობა pending, reject, fulfielld;
// .then გამოიყენება იმ შემთხვევაში თუ ჩვენი პირობა არის სწორი ანუ fulfielld ი და კონსოლში გამოგვაქვს შესაბამისი პირობა.
// .catch გამოიყენება იმ შემთხვევაში თუ ჩვენი პირობა არ არის სწორი ანუ reject ი და კონსოლში გამოგვაქვს შესაბამისი პირობა.
// .finally ეს კოდის ბლოკი ყოველთვის შესრულდება თუნდაც მცდარი პირობისას ან სწორისგან

// 2) კომენტარების სახით ახსენით რას აკეთებს და რისთვის გამოიყენება Promise.all მეთოდი.

// promise.all() ს გადაეცემა ფრჩხილებში მასივი ამ მასივში მოქცეულია promise-ბი. შეგვიძლია ეს promise ბი ერთდორულად ვმართოდ თუ ერთერთი promise ისგან მივიღეთ reject ი მაშინ გამოიტანს მხოლოდ ამ reject ის შესაბამის პირობას. თუ ყველა წარმატებით შესრულდება თითო ხაზზე გამოიტანს resolve ის წინადადებას შეგვიძლია for loop ი გამოვიყენოთ უფრო ლამაზად დასანახად

// 3) შექმენით ფუნქცია getProduct რომელსაც გადაეცემა success არგუმენტი, შემდგომ ამ ფუნქციამ უნდა დააბრუნოს Promise - ი და მის შიგნით შეამოწმეთ success - ის მნიშვნელობა, თუ მისი მნიშვნელობა არის true - დაუბრუნეთ resolve ფუნქციით პროდუქტის ობიექტი (title, description, price, stock), ყველა სხვა შემთხვევაში - reject - ით დააბრუნეთ ერორის ობიექტი (status, message). (გატესტეთ ამ ფუნქციის ორივე შემთხვევა)

function getproducts(success){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(success){
                resolve({
                    title: 'Prison break',
                    description: 'Prison break',
                    price: '$111111111',
                    stock:'500'
                })
            }else{
                reject({
                    status: false,
                    message: 'მარაგი ამოიწურა!'
                })
            }
        }, 1000);
    })
}

getproducts(true).then((data) => {console.log(data)}).catch((err) => console.log(err))

// 4) შექმენით მინიმუმ 5 promise - ი და Promise.all - ის მეშვეობით დაამუშავეთ ყველა მათგანი ერთდროულად და გამოიტანეთ შედეგები ტერმინალში.

const car1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            car: 'Ford Fusion', 
            price: '$9500'
        })
    }, 200);
})
const car2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            car: 'Toyota Camry', 
            price: '$10500'
        })
    }, 200);
})
const car3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            car: 'Honda Accord', 
            price: '$13500'
        })
    }, 200);
})
const car4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            car: 'BMW e60 M5', 
            price: '$999999999'
        })
    }, 200);
})
const car5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            car: 'Mercedes CLS63s', 
            price: '$99999999999'
        })
    }, 200);
})


const promises = [car1, car2, car3, car4, car5]

Promise.all(promises).then((data) => {for(let i = 0; i < promises.length; i++){console.log(data[i])}}).catch((err) => console.log(err))
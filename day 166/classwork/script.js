// 1) შექმენით თქვენი ხელოვნური Promise და გადაეცით callback ფუნქცია resolve და reject პარამეტრით, ფუნქციის შიგნით გამოიყენეთ setTimeout - ი იმისთვის რომ შეაყოვნოთ კოდი, ასევე შექმენით success ცვლადი რისი დახმარებითაც თქვენ მიიღებთ გადაწყვეტილებას რომელი სიტუაცია გაუშვათ resolve თუ reject, შემდგომ ფუნქციის გარეთ დაელოდეთ promise - ის შესრულებას .then და .catch ფუნქციის დახმარებით

// const success = true;

// const promm = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(success){
//             resolve('successfly')
//         }else{
//             reject('Error')
//         }
//     }, 2000);
// })

// promm
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })





// let func1 = (success) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(success){
//                 resolve({
//                     name: 'enrike',
//                     surename: 'shakaridze'
//                 })

//             }else{
//                 reject({
//                     user: 'user not found!'
//                 })
//             }
//         }, 1500);
//     })
// }
// func1(true).then((data)=> console.log(data)).catch((err) => console.log(err)).finally(() => console.log('promise end!'))


// promile all ყველა ფრომისის ერთად დაბრუნება იმ შემთხვევაში თუ ყველაში სრულდება სწორი პირობა ანუ რესოლვის ველიუ გამოიტანოს
// ერთიც რომ შეცდომა იყოს ერორი იქნება ანუ რეჯეცტის ველიუს გამოიტანს

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('0.5s sucsesfly')
//     }, 500);
// })
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('0.8s sucsesfly')
//     }, 800);
// })
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('0.2s sucsesfly')
//     }, 200);
// })
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('1.5s sucsesfly')
//     }, 1500);
// })
// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('01s sucsesfly')
//     }, 1000);
// })

// const promises = [promise1, promise2, promise3, promise4, promise5]

// Promise.all(promises)
//     .then((data) => {
//         for(let i = 0; i< promises.length; i++){
//             console.log(data[i])
//         };
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// 1) შექმენი ორი Promise  (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად დამუშავებისთვის Allsetteld გამოიყენე.

// const promise1 = new Promise((resolve, reject) => {
//     resolve('promise 1 is resolve')
// })

// const promise2 = new Promise((resolve, reject) => {
//     reject('promise 2 is reject')
// })

// promise1.then((data) => console.log(data)).catch((err) => console.log(err))
// promise2.then((data) => console.log(data)).catch((err) => console.log(err))

// const promisearray = [promise1, promise2]
// Promise.allSettled(promisearray)
//     .then((data) => {
//         for(let i = 0; i < promisearray.length ; i++){
//             console.log(data[i])
//         }
//     })



// 2) შექმენი 4 პრომისი, თითოეული ჩასვი setTimeOut-ში და  დააბრუნე მათგან რომელი გაეშვება ყველაზე სწრაფად.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise 1')
//     }, 300);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('promise 2')
//     }, 500);
// })

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise 3')
//     }, 1200);
// })

// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('promise 4')
//     }, 2000);
// })

// const array = [promise1, promise2, promise3, promise4]

// Promise.race(array)
//     .then((data) =>{
//         console.log('ყველაზე სწრაფად გამოვიდა', data, '(resolve)')
//     })
//     .catch((err) => {
//         console.log('ყველაზე სწრაფად გამოვიდა', err, '(reject)')
//     })


// 3)შექმენი 4 ფრომისი  და reduce-ით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი.

// const promise1 = new Promise((resolve, reject) => {
//     resolve('promise 1')
// })

// const promise2 = new Promise((resolve, reject) => {
//     reject('promise 2')
// })

// const promise3 = new Promise((resolve, reject) => {
//     reject('promise 3')
// })

// const promise4 = new Promise((resolve, reject) => {
//     resolve('promise 4')
// })
// const array = [promise1, promise2, promise3, promise4]

// let countrj = 0;
// let countrs = 0;
// Promise.allSettled(array)
//     .then((data) => {
//         for(let i = 0; i < data.length; i++){
//             if(data[i].status === 'rejected'){
//                 countrj++
//             }else{
//                 countrs++
//             }
//         }
//     })

// setTimeout(() => {
//     console.log('reject',countrj)
//     console.log('resolve',countrs)
// }, 1000);

// 4) შექმენი 5 Promise და გაფილტრე ეს ფრომისები დააბრუნე  მხოლოდ წარმატებულები (resolved/fulfilled).

const promise1 = new Promise((resolve, reject) => {
    resolve('promise 1')
})

const promise2 = new Promise((resolve, reject) => {
    reject('promise 2')
})

const promise3 = new Promise((resolve, reject) => {
    reject('promise 3')
})

const promise4 = new Promise((resolve, reject) => {
    resolve('promise 4')
})

const promise5 = new Promise((resolve, reject) => {
    reject('promise 5')
})

const array = [promise1, promise2, promise3, promise4, promise5]

Promise.allSettled(array)
    .then((data) => {
        for(let i = 0; i < data.length; i++){
            if(data[i].status === 'fulfilled'){
                console.log(data[i])
            }else{
                0
            }
        }
    })
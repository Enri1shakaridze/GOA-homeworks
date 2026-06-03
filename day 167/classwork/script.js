// 1) შექენი 4 Promise (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული

// const promise1 = new Promise((resolve, reject) => {
//     reject('promise 1')
// })
// const promise3 = new Promise((resolve, reject) => {
//     reject('promise 2')
// })
// const promise2 = new Promise((resolve, reject) => {
//     resolve('promise 3')
// })
// const promise4 = new Promise((resolve, reject) => {
//     resolve('promise 4')
// })
// const promise5 = new Promise((resolve, reject) => {
//     resolve('promise 5')
// })

// Promise.any([promise1, promise2, promise3, promise4, promise4])
//     .then((data) => {
//         console.log(data)
//     })


// 2) შექმენი 5 Promise და გაფილტრე ეს ფრომისები დააბრუნე  მხოლოდ წარუმატებლები (rejected). (მინიშნება: გამოგადგებათ filter() )

const promise1 = new Promise((resolve, reject) => {
    resolve('promise1')
})
const promise3 = new Promise((resolve, reject) => {
    reject('promise 2')
})
const promise2 = new Promise((resolve, reject) => {
    resolve('promise 3')
})
const promise4 = new Promise((resolve, reject) => {
    resolve('promise 4')
})
const promise5 = new Promise((resolve, reject) => {
    resolve('promise 5')
})

Promise.allSettled([promise1, promise2, promise3, promise4, promise4])
    .then((data) => {
        for(let i = 0; i< data.length; i++){
            if(data[i].status === 'fulfilled'){
                console.log(data[i])
            }
        }
        
        })
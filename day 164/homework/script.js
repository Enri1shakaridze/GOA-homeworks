// 1) შექმენი ფუნქცია, რომელიც ყოველ 1 წამში დაბეჭდავს შემთხვევით რიცხვს 1-დან 50-მდე. თუ რიცხვი 25 გამოვა, გააჩერე ინტერვალი და დაბეჭდე "Target found!".

// function getrandom(){
//     let num = Math.floor(Math.random() * 51);
//     if(num === 25){
//         console.log(num);
//         console.log('Target found!');
//         clearInterval(set);
//     }else{
//         console.log(num)
//     }
// }
// let set = setInterval(() => {
//     getrandom();
// }, 1000);

// 2) შექმენი ფუნქცია, რომელიც იღებს ტექსტს და ყოველ 500 მილიწამში თითო სიმბოლოს ბეჭდავს კონსოლში (typewriter effect).

// let num = 0;
// function gettext(text){
//     if(num === text.length -1){
//         clearInterval(setr)
//     }
//     console.log(text[num])
//     num++;
// }
// let tex = 'enrike'
// let setr = setInterval(() => {
//     gettext(tex);
// }, 1000);

// 3) შექმენი ტაიმერი, რომელიც იწყებს 10-დან და ყოველ წამში აკლებს 1-ს. როდესაც 0 გახდება, დაბეჭდე "Time's up!".

// 162/hw/script1

// 4) შექმენი მასივი 5 სახელით. ყოველ 2 წამში კონსოლში დაბეჭდე შემდეგი სახელი. როცა ყველა სახელი დაიბეჭდება, ინტერვალი შეწყდეს.


// let array = ['saba', 'enrike', 'irakli', 'temo', 'sandro']
// let num = 0;

// let a = setInterval(() => {
//     if(num === array.length -1){
//         clearInterval(a)
//     }
//     console.log(array[num])
//     num++
// }, 1000);

// 5) ყველამ შეასრულეთ წინა დავალებები.
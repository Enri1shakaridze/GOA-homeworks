
// 1) დაწერე ფუნქცია, რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

// const p = document.getElementById('paragrafh');
// let num = 10;
// p.textContent = num

// function gettime(sec){
//     if(sec > 0){
//         num--
//         p.textContent = num
//     }
//     if(sec === 0){
//         clearInterval(time);
//     }
// }

// let time = setInterval(() => {
//     gettime(num)
// }, 500);





// 2) შექმენი ფუქნცია, რომელსაც გადააწოდებ რიცხვი. კონსოლში დალოგე რენდომული რიცხვი იქამდე, სანამ ეს გადაცემული და რენდომ რიცხვი არ დაემთხვევა ერთმამენთს.


// let num = 10;
// let a = setInterval(() => {
//     let n = Math.floor(Math.random() * 11)
//     if(n === num){
//         console.log('Done')
//         clearInterval(a)
//     }else{
//         console.log(n)
//     }
// }, 1000);

// 3) ექმენი ფუნქცია, რომელიც ყოველ 0.5 წამში რიგრიგობით დაბეჭდავს "[ON]" და "[OFF]", ისე თითქოს ნათურა ციმციმებს.


// let array = ['ON', 'OFF'];
// let num = 0;

// let s = setInterval(() => {
//     if(num === 0){
//         console.log(array[num])
//         num++
//     }
//     if(num === 1){
//         console.log(array[num])
//         num--
//     }
// }, 500);

// 4) 3 წამში კონსოლში დაბეჭდე შემთხვევითი რიცხვი 1-დან 100-მდე. თუ რიცხვი 90-ზე მეტი აღმოჩნდება, გააჩერე პროცესი და დაბეჭდე: "The number has been found."

// let a = setInterval(() => {
//     let num = Math.floor(Math.random() * 101)
//     if(num >= 90){
//         console.log("The number has been found.")
//         clearInterval(a);
//     }else{
//         console.log(num)
//     }
// }, 1000);


// 5) შექმენი ცვლადი progress = 0. ყოველ 200 მილიწამში გაზარდე ის 5-ით და დაბეჭდე (მაგ: "Loading: 5%"). როცა 100%-ს მიაღწევს, დაწერე "Done!" და გააჩერე.

// let num = 0;

// let a = setInterval(() => {
//     if(num === 100){
//         console.log('Done!')
//         clearInterval(a);
//     }else{
//         console.log(`Loading: ${num}%`)
//         num += 5
//     }
// }, 200);


// 6) გაქვს მასივი 3 სხვადასხვა მესიჯით. ყოველ 2 წამში გაგზავნე (დაბეჭდე) მომდევნო მესიჯი. როცა მესიჯები გათავდება, დაიწყე თავიდან (ციკლურად). ხოლო მე-4 ციკლის შემდეგ საერთოდ გათიშე ინტერვალი.


// let array = ['hello', 'how are you?', 'bye bye'] 
// let num = 0;
// let n = 0;
// let a = setInterval(() => {
//     if(n === 14){
//         clearInterval(a)
//     }
//     if(num === 3){
//         num = 0;
//         n++
//     }else{
//         console.log(array[num])
//         num++
//         n++
//     }
// }, 2000);

// 7) დაწერე ტაიმერი, რომელიც ითვლის წამებს. ყოველ 5 წამში მომხმარებელს კონსოლში დაუსვი კითხვა "გსურთ ტაიმერის გაგრძელება?". თუ მომხმარებელი იტყვის უარს, ინტერვალი უნდა გაჩერდეს, სხვა შემთხვევაში გაგრძელდეს.

// let a = setInterval(() => {
//     console.log('გსურთ ტაიმერის გაგრძელება?');
//     let n = prompt('გსურთ ტაიმერის გაგრძელება?');
//     if(n === 'კი'){
//         console.log(n)
//     }
//     if(n === 'არა'){
//         console.log(n)
//         clearInterval(a)
//     }
// }, 1000);


// 8) შექმენი საწყისი ფასი, მაგალითად 100$. ყოველ 1 წამში ფასი შემთხვევითად ან იზრდება 1-დან 5 დოლარამდე, ან იკლებს. ყოველ წამს დაბეჭდე ახალი ფასი. თუ ფასი ჩამოცდება 80$-ს ან ავა 120$-ზე გააჩერე ინტერვალი და დაბეჭდე საბოლოო შედეგი.

// let num = 100;

// let a = setInterval(() => {
//     let q = Math.floor(Math.random() * 2)
//     if(q === 0){
//         num -= Math.floor(Math.random() * 5)
//         console.log(num)
//     }
//     if(q === 1){
//         num += Math.floor(Math.random() * 5)
//         console.log(num)
//     }
// }, 500);

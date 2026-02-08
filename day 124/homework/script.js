// 2) შექმენით Arrow ფუნქცია, რომელიც მიიღებს მომხმარებლის ასაკს.
// თუ ასაკი არის 18 ან მეტი, დაბეჭდოს ტექსტი: "You're an adult"
// სხვა შემთხვევაში დაბეჭდოს ტექსტი: "You are not an adult".

const Arrow = age => age >= 18 ? "You're an adult" : "You are not an adult"
console.log(Arrow(20))

// ეს ფუნქცია დაწერეთ ერთ ხაზში და გამოიყენეთ Ternary Operator-ი.

// 3) შექმენით Arrow ფუნქცია, რომელიც მიიღებს ტექსტს და დააბრუნებს ამ ტექსტში არსებული ასოების რაოდენობას. შეასრულეთ ერთ ხაზში.

const Arrow2 = text => text.length
console.log(Arrow2('enrooooo'))

// 4) შექმენით Arrow ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ყველა ელემენტის ჯამს. შეასრულეთ ერთ ხაზში.

const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);
console.log(sumArray([1, 2, 3, 4, 5]));

// 5) შექმენით Arrow ფუნქცია, რომელიც დააბრუნებს რიცხვის კვადრატს. შეასრულეთ ერთ ხაზში.

const Arrow4 = kv2 => kv2 ** 2
console.log(Arrow4(5))

// 6) შეასრულეთ მოცემული codewars:
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) {  
    let res = numbers.sort((a, b) => a - b)
    return res[0] + res[1]
}
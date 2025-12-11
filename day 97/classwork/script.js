//
// 1) მონაცემის ტიპები + განმარტება + console.log მაგალითები
// 

// string — ტექსტური მონაცემი
console.log("String example:", "Hello");

// number — რიცხვები (მთელი და ათწილადი)
console.log("Number example:", 42);

// boolean — ლოგიკური მნიშვნელობა (true/false)
console.log("Boolean example:", true);

// undefined — ცვლადი არსებობს, მაგრამ მნიშვნელობა არ აქვს
let x;
console.log("Undefined example:", x);

// null — ცვლადს შეგნებულად აქვს ცარიელი მნიშვნელობა
let y = null;
console.log("Null example:", y);

// object — ობიექტი (მონაცემების კოლექცია key:value)
console.log("Object example:", {name: "Gio", age: 15});

// array — მასივი (მონაცემების სიას ჰგავს)
console.log("Array example:", [1, 2, 3]);

// 
// 2) ცვლადებში შენახვა + კონკატინაციით წინადადება
// 

let myName = "Enrike";
let surname = "Shakaradze";
let age = 15;
let address = "Batum";

console.log("Me var " + myName + " " + surname + ", var " + age + " wlis da vcxovrob " + address + "-shi.");

// 
// 3) num1 და num2 + 5 ოპერაცია + შემდეგ მნიშვნელობების შეცვლა
// 

let num1 = 10;
let num2 = 5;

console.log("mimateba:", num1 + num2);
console.log("gamokleba:", num1 - num2);
console.log("gamravleba:", num1 * num2);
console.log("gayofa:", num1 / num2);
console.log("naxevari-nawili (%):", num1 % num2);

// 
num1 = 20;
num2 = 3;

console.log("NEW mimateba:", num1 + num2);
console.log("NEW gamokleba:", num1 - num2);
console.log("NEW gamravleba:", num1 * num2);
console.log("NEW gayofa:", num1 / num2);
console.log("NEW %:", num1 % num2);

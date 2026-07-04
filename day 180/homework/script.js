// Modules:

// import { add, PI, subtract} from "./mathUtils.js";
// import Userclass from "./User.js";

// 1) შექმენი მათემატიკური დამხმარე ფაილი სახელად mathUtils.js და მასში დაწერე ორი ფუნქცია — add(a, b) ჯამის გამოსათვლელად და subtract(a, b) სხვაობისთვის, ასევე შექმენი PI ცვლადი, რომელშიც Math ობიექტის მეშვეობით შეინახავ PI-ს მნიშვნელობას. ეს სამივე ელემენტი ფაილიდან named export-ის გამოყენებით უნდა გაიტანო, რის შემდეგაც მთავარ ფაილში main.js შემოიტან ყველას ერთად, გამოიძახებ ფუნქციებს და შედეგებს კონსოლში დაბეჭდავ.

// console.log(add(10, 20))
// console.log(subtract(30, 20))
// console.log(PI)

// 2) შექმენი ფაილი სახელად User.js, რომელშიც აღწერ User კლასს კონსტრუქტორითა (name და age პარამეტრებით) და greet() მეთოდით, რომელიც კონსოლში გამოიტანს მისალმების ტექსტს მომხმარებლის სახელით. ეს კლასი ფაილიდან default export-ით უნდა გაიტანო, ხოლო main.js ფაილში იმპორტის დროს მას სხვა სახელი უნდა დაარქვა, შექმნა ახალი ობიექტი და შეამოწმო მისალმების მეთოდის მუშაობა.

// let user1 = new Userclass('Enrike', 15);
// console.log(user1.name)
// console.log(user1.greet())

// CommonJs:

// 3) ექმენი ფაილი stringUtils.js, სადაც დაწერ ტექსტის გასადიდებელ uppercase(str) ფუნქციას და მის შესაბრუნებელ reverse(str) ფუნქციას, რომლებსაც module.exports-ში ობიექტის სახით გააერთიანებ და გაიტან. ამის შემდეგ შექმნი მთავარ ფაილს app.js, სადაც ამ ფუნქციებს require() სინტაქსითა და დესტრუქტურიზაციის გამოყენებით შემოიტან და მათ კონსოლში გატესტავ.

// const {uppercase, reverse} = require('./stringUtils')
// console.log(uppercase('e'))
// console.log(reverse('en'))
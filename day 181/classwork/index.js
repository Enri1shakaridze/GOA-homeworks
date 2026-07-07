// Module-ით
// 1) შექმენი ფაილი theme.js, სადაც named export-ის გამოყენებით გაიტან სხვადასხვა ცვლადებს, როგორიცაა primaryColor, secondaryColor, borderRadius და fontSize. მთავარ ფაილში app.js შემოიტანე ყველა ეს მონაცემი ერთდროულად და დაბეჭდე მიღებული ობიექტი კონსოლში.

// import { borderRadius, fontSize, primaryColor, secondaryColor } from "./theme.js";

// console.log(borderRadius)
// console.log(secondaryColor)
// console.log(primaryColor)
// console.log(fontSize)

// CommonJS-ით
// 2) შექმენი ფაილი სახელად data.js, მასში შექმენი  სტრინგის ტიპის ცვლადი, რომელიც შეიცავს შენს სახელს, და პირდაპირ module.exports-ის გამოყენებით დააექსპორტე. მთავარ ფაილ app.js-ში, სადაც require() ფუნქციის დახმარებით შემოიტანე ეს ცვლადი,  დაარქვი ახალი სახელი და დაბეჭდე კონსოლში.


// let str = require('./data.js')

// str = 'Saba'
// console.log(str)
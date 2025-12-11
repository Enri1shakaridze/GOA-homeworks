// 1)
// let საშუალებას გვაძლევს შევქმნათ ბლოკის დონის ცვლადი, ანუ მოცემული ცვლადი მხოლოდ იმ ბლოკშია ვალიდური სადაც შეიქმნა.

// const ქივორდით ხდება ისეთო ცვლადების შექმნა, რომლებიც არ უნდა შეიცვალოს:
// const Pi = 3.14 
// Pi = 1;  ეს შეცდომას გამოიწვევს, იქიდან გამომდინარე რომ Pi const ქივორდით შეიქმნა, ანუ მისი შეცვლა შეუძლებელია.


// 2)
var myName 
var myAge
var mySurename 
var myDadName
var myMamName
console.log(myName, myAge, mySurename, myDadName, myMamName)
myName = 'enrike'
myAge = 14
mySurename = 'shakaridze'
myDadName = 'muradi'
myMamName = 'elene'
console.log(myName, myAge, mySurename, myDadName, myMamName)

// 3)
const countryName = 'Georgia'
const capitalCity = 'Tbilisi'
const city = 'batumi'
console.log('countryName is: ', {countryName},  'capitalCity is: ', capitalCity, 'city is: ', city)

// 4)
let fruit1 = "ვაშლი";
let fruit2 = "მსხალი";
let fruit3 = "ბანანი";
let fruit4 = "ქლიავი";
let fruit5 = "მსხალი";

console.log("Fruit N1: " + fruit1);
console.log("Fruit N2: " + fruit2);
console.log("Fruit N3: " + fruit3);
console.log("Fruit N4: " + fruit4);
console.log("Fruit N5: " + fruit5);

fruit1 = "ფორთოხალი";
fruit2 = "ატამი";
fruit3 = "საზამთრო";
fruit4 = "ანანასი";
fruit5 = "მანგო";

console.log("Updated Fruit N1: " + fruit1);
console.log("Updated Fruit N2: " + fruit2);
console.log("Updated Fruit N3: " + fruit3);
console.log("Updated Fruit N4: " + fruit4);
console.log("Updated Fruit N5: " + fruit5);

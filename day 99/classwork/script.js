// 1) შექმენით სამი სხვადასხვა ცვლადი let-ის გამოყენებით: word1, word2, word3.
// სამივეში შეინახეთ სხვადასხვა სტრინგი და გამოიტანეთ კონსოლში. გამოიყენეთ toUpperCase მეთოდი რომ გადაიყვანოთ ეს სტრინგები დიდ ასოებად და შეინახოთ ახალ ცვლადებში (შემდეგ ისევ გამოიტანეთ კონსოლში).
let word1 = 'bmw';
let word2 = 'mercedes-benz';
let word3 = 'ford';
console.log(word1);
console.log(word2);
console.log(word3);

let upperWord1 = word1.toUpperCase();
let upperWord2 = word2.toUpperCase();
let upperWord3 = word3.toUpperCase();

console.log(upperWord1);
console.log(upperWord2);
console.log(upperWord3);

// 2) გამოიყენეთ დღეს ნასწავლი მეთოდი, რომ ამ სტრინგს მოაშოროთ ცარიელი სფეისები:
// const variable = '     Group 71      '
const variable = '     Group 71      ';
console.log(variable.trim())


// 3) კომენტარის სახით ახსენით რას აკეთებს - Math.random() და Math.floor()

// Math.random() — გენერირებს შემთხვევით რიცხვს 0 (შემიდგომის) და 1 (გამომდიოკის გარეშე) შორის, მაგალითად: 0.2345, 0.876, 0.01

// Math.floor() — იღებს რიცხვს და დაბლა წრედებს მას მთლიან რიცხვამდე, ანუ წაშლის ათწილოვან ნაწილს.
// მაგალითად: Math.floor(4.7) → 4, Math.floor(4.2) → 4


// 4) დააგენერირეთ რენდომ რიცხვი 0-დან 71-მდე და გამოიტანეთ კონსოლში. ეს რიცხვი აუცილებლად უნდა იყოს მთელი, ამიტომ დაამრგვალეთ.

console.log(Math.floor(Math.random() * 72))
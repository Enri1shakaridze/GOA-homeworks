// 2) console-ში დაბეჭდეთ true ან false ამ მნიშვნელობებზე დაფუძნებით. (გამოიყენეთ Boolean ფუნქცია)
// 0
// ''
// 'Hello'
// null
// undefined
// []
// {}
// '0'
// NaN
// false

console.log(Boolean(0));        // false
console.log(Boolean(''));       // false
console.log(Boolean('Hello'));  // true
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
console.log(Boolean('0'));      // true
console.log(Boolean(NaN));      // false
console.log(Boolean(false));    // false

// 3) age ცვლადში შეინახეთ prompt-ის საშუალებით შემოტანილი მომხმარებლის ასაკი. გამოიყენეთ Ternary Operator, რომ დაბეჭდოთ:
// 'Adult' თუ მოხმარებლის ასაკი 18 წელზე მეტია, 'teen' თუ 13-დან 17-ის ჩათვლითაა, ხოლო 'child' ყველა სხვა შემთხვევაში.

var age = prompt('enter age: ')

var res = age > 18 ? 'adult' : age >= 13 && age <= 17 ? 'teen' : 'child';
console.log(res)

// 4) შეამოწმეთ რიცხვი ლუწია თუ კენტი Ternary Operator-ით. დააბრუნეთ 'Even'/'Odd'

var agee = prompt('enter num: ')

var res = agee % 2 === 0 ? 'even' : 'odd';
console.log(res)

// 5) შექმენით isLoggedIn ცვლადი. მომხმარებელს შემოატანინეთ ინფორმაცია არის თუ არა შესული სისტემაში. თუ პასუხი 'yes' არის - ტერნარის მეშვეობით isLoggedIn  ცვლადში შეინახეთ true, სხვა შემთხვევაში false. გამოიყენეთ string literal, რომ კონსოლში დაბეჭდოთ წინადადება:
// 'Is the user logged in? true/false.'

var isLonggedIn = prompt('you are in sistem? yes/no?: ')

var res = isLonggedIn === 'yes' ? true : false;

console.log(`Is the user logged in? ${res}`)


// 6) მოცემულია:

// const a = 298;
// const b = 330;
// ternary operator-ით დაბეჭდე "a is bigger", "b is bigger" ან "equal".

const a = 298;
const b = 330;

var res = a > b ? "a is bigger" : a < b ? "b is bigger" : "equal";
console.log(res)

// 7) შექმენით mode ჩვლადი. მასში შეინახეთ 'Dark' ან 'Light'. გამოიყენეთ ternary + && + || რომ შეამოწმოთ:
// თუ mode-ის მნიშვნელობა 'dark' არის დაბეჭდეთ "Dark Mode On"
// თუ mode-ის მნიშვნელობა 'light' არის დაბეჭდეთ "Light Mode On"ც

// სხვა შემთხვევაში (|| იოპერატორის გამოყენებით) 'Unknown mode'

var mode = 'Dark';

console.log((mode.toLowerCase() === 'dark' && 'Dark Mode On') || (mode.toLowerCase() === 'light' && 'Light Mode On') || 'Unknown mode'
);

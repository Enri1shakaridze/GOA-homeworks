

// 1) • ჩამოწერეთ მნიშვნელობები, რომლებიც Truthy მნიშვნელობას ეკუთვნის.
//    • ჩამოწერეთ მნიშვნელობები, რომლებიც Falsey მნიშვნელობას ეკუთვნის.

// 0 -> false
// 1 -> true
// "Enri" true იქნება რადგან სტრინგი ცარიელი არ არის
// "" false იქნება რადგან ცარიელია სტრინგი

// 2) მომხმარებელს prompt()-ის გამოყენებით შემოატანინეთ ინფორმაცია არის თუ არა ადმინი. თუ მომხმარებელი შემოიტანს 'yes' მაშინ isAdmin ცვლადში შეინახეთ true, თუ შემოიტანს 'no', მაშინ isAdmin ცვლადში შეინახეთ false.

let human = prompt('ხარ თუ არა ადამიანი?: ')

let isAdmin = human === 'yes' ? true : false;
console.log(isAdmin) 


// 3) გამოიყენეთ წინა დავალება და || ოპერატორი, რომ განაგრძოთ პროგრამა:
// შექმენით greetMsg ცვლადი.
// თუ isAdmin ცვლადში შენახულია true მნიშვნელობა მაშინ greetMsg გაუტოლეთ 'Admin'-ს, ხოლო თუ მისი მნიშვნელობა false-ია greetMsg ცვლადში 'user' შეინახეთ.

// საბოლოოდ კონსოლში დაბეჭდეთ 'Hello, {greetMsg}`. გამოიყენეთ String Literal.

let greetMsg = isAdmin === true ? isAdmin || 'Admin' : isAdmin || 'user';

console.log(`hello ${greetMsg}`)
// 6) დაწერეთ კოდი, რომელიც 3 წამში დაბეჭდავს "BOOM!".
// თუმცა, იქვე დაწერე მეორე setTimeout, რომელიც 2 წამში გააუქმებს (clearTimeout) პირველ ტაიმერს, ისე რომ "BOOM!" საერთოდ არ დაიბეჭდოს.

let boom = setTimeout(() => {
    console.log('BOOM!');
}, 3000)

setTimeout(() => {
    clearTimeout(boom);
}, 2000)
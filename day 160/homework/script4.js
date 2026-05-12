// 6) დაწერეთ კოდი, რომელიც 3 წამში დაბეჭდავს "BOOM!".
// თუმცა, იქვე დაწერე მეორე setTimeout, რომელიც 2 წამში გააუქმებს (clearTimeout) პირველ ტაიმერს, ისე რომ "BOOM!" საერთოდ არ დაიბეჭდოს.

let bom = setTimeout(() => {
    console.log('BOOM!');
}, 3000)

setTimeout(() => {
    clearTimeout(bom);
}, 2000)
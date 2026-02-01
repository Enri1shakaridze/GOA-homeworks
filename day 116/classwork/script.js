// push - მასივის ბოლოს ამატებს ელემენტს;
// pop - მასივის ბოლოს აგდებს ელემენტს;
// toString - მასივი გადაყავს სტრინგათ;
// at - მასივიდან აბრუნებს კონკრეტულ ინდექსზე მდგომ ელემენტს;
// shift - ავტომატურად პირველ ინდექსზე მყოფ ელემენტს ამოაგდებს;
// unsift - ი კი მასივის დასაწყისში ამატებს ელემენტს;
// splice ს გადაეცემა 2 არგუმენტი თუ საიდან სადამდე უნდა გაიხლიჩოს სია ან ა.შ.

// 1) დაწერეთ საშინაო დავალებაშიმოცემული სავარჯიშო (რაც დღეს გავარჩიეთ), თუმცა ეს პროგრამა უნდა იყოს case-insensitive

// მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს 'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.

var admin = 'admin123';
var prom = prompt('enter password: ')

while (admin != prom.toLowerCase()){
    console.log('wrong passsword, try again')
    prom = prompt('enter password: ')
}
console.log('Access Granted');

// 2) შექმენით 6-ელემენტიანი მასივი. გამოიყენეთ at() პირველი და ბოლო ელემენტების დასაბეჭდად. შემდეგ კი სიიდან ამოშალეთ ყველა ის ელემენტი, რომელთა სიგრძეც 5-ს აღემატება.

var randomm = ['bmw', 'mercedes-benz', 'porshe', 'ferrari', 'audi']

console.log(randomm.at(0))
console.log(randomm.at(-1))

for(let i = 0; i < randomm.length; i++){
    if(randomm[i].length < 5){
        randomm.splice(i, 1)
    }
}

console.log(randomm)

// 3) დაწერეთ while loop, რომელიც 1-დან 10-მდე დაბეჭდავს რიცხვებს. 3-ის ჯერად რიცხვებზე დაბეჭდოს 'Fizz', 5-ის ჯერად რიცხვებზე 'Buzz'. ორივეზე ერთად 'FizzBuzz'.

// როდესაც რიცხვების count მიაღწევს 45-ს => გაწყვიტეთ პროგრამა.

i = 0;
while( i <= 50){
    console.log(i % 3 === 0 ? 'Fizz' : i % 5 === 0 ? 'Buzz' : i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' : '')
    if(i === 45){
        break;
    }
    i++;
} 

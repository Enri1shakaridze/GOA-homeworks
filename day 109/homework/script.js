// 2) შექმენით მასივი, სადაც ჩვენს მიერ ნასწავლ პროგრამირების ენებს შეინახავთ.
// პირველ რიგში ცალ-ცალკე ხაზებზე გამოიტანეთ სიის თითოეული ელემენტი.
// შემდეგ კი სცადეთ უფრო მარტივი გზით: for loop-ის საშუალებით გამოიტანეთ სიის თითოეული ელემენტი.

const programing = ['python', 'javascript', 'java', 'c++', 'SQL']
console.log(programing[0])
console.log(programing[1])
console.log(programing[2])
console.log(programing[3])
console.log(programing[4])

for(let i = 0; i < programing.length; i++){
    console.log(programing[i])
}

// 3) შექმენით რიცხვების სია და დაითვალეთ მხოლოდ დადებითი რიცხვების ჯამი. შედეგი გამოიტანეთ კონსოლში.

let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let NumA = 0;

for(let i = 0; i < Num.length; i++){
    if (i % 2 == 0){
        NumA += i;
    }
}
console.log(NumA);


// 4) შექმენით ორი რიცხვეის სია, შეამოწმეთ შეიცავს თუ არა ერთიდაიმავე წევრებს.
// თუ რიცხვები ერთმანეთს ემთხვევა - mutualNums სიაში დაამატეთ საერთო ელემენტები.

const NumberA = [1, 3, 5, 7, 9, 2, 6]
const NumberB = [2, 3, 4, 6, 8, 1, 0]

const mutualNums = []

for(let i = 0; i < NumberA.length; i++){
    for(let j = 0; NumberB.length; j++){
        if(NumberA[i] === NumberB[j]){
            mutualNums.push(NumberA[i])
        }
    }
}
console.log(mutualNums)

// 5) დაასრულეთ მოცემული პროექტი:
// https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9/
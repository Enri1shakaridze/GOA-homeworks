// 1) შექმენით სახელების სია. for loop ის გამოყენებით გამოიტანეთ სიის თითოეული წევრი.

let Name = ['jack', 'smith', 'Enri', 'Temo']

for(let i = 0; i < Name.length; i++){
    console.log(Name[i]);
}

// 2) შექმენით რიცხვების სია და დაითვალეთ მხოლოდ ლუწი რიცხვების ჯამი. შედეგი გამოიტანეთ კონსოლში.

let Num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let NumA = 0;

for(let i = 0; i < Num.length; i++){
    if (i % 2 == 0){
        NumA += i;
    }
}
console.log(NumA);

// 3) შექმენით ორი სახელების სია, შეამოწმეთ შეიცავს თუ არა ერთიდაიგივე წევრებს სიები 
// თუ შეიცავს - mutualNames სიაში დაამატეთ საერთო ელემენტები.

const NameA = ['Alice', 'Tom', 'Sarah', 'Mike'];
const NameB = ['Alice', 'Mike', 'Emma'];
const mutualNames = [];
for (let i = 0; i < NameA.length; i++) {
    for (let j = 0; j < NameB.length; j++) {
    if (NameA[i] === NameB[j]) {
        mutualNames.push(NameA[i]);
    }
}
}
console.log(mutualNames);



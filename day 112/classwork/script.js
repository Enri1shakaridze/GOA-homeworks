
// 1) დაწერეთ while loop პროგრამა: შეეკითხეთ მომხმარებელს პაროლი, იქამდე სანამ არ შემოიტანს სწორ მნიშვნელობას.

let strFirst = prompt('enter first password: ')
let strSecond = prompt('enter second password: ')

while(strFirst !== strSecond){
    console.log('wrong password try again!')
    strFirst = prompt('enter first password: ')
    strSecond = prompt('enter second password: ')
}
console.log('correct')

// 2) while loop-ის გამოყენებით გამოიტანეთ რიცხვები 1-დან 15-ის ჩათვლით.

let i = 0;
while(i < 15){
    console.log(i)
    i ++
}

// 3) while loop-ის გამოყენებით გამოიტანეთ რიცხვები 200-დან 0-ის ჩათვლით.

let x = 200;
while(x >= 0){
    console.log(x)
    x--
}

// 4) კომენტარის სახით ახსენით, თუ რაში გვჭირდება do while loop და რითი განსხვავდება იგი ჩვეულებრივი while loop-ისგან.

// do while loop იმით განსხვავდება ჩვეულებრივი while loop ისგან რომ do while ყოველთვის გამოიტანს do ში რაც გვაქვს დაკოსოლებული მხოლოდ ერთჯერ და while loop ი false ის შემთხვევაში არფერს გამოიტანს
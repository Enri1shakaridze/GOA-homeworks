// 1) მომხმარებელს შემოაყვანინეთ რიცხვი ( 0 - 100 ) 
// ქულის მიხედვით დაადგინეთ შეფასება:

// 90--100 -> "A"
// 80--89 -> "B"
// 70--79 -> "C"
// 60--69 -> "D"
// 0--59 -> "F" 
// სხვა მნიშვნელობის შემთხვევაში -> "invalid score"
// (გამოიყენეთ switch case) 

let number = number(prompt('enter number: '))

switch (number){
    case (number >= 90 && number <= 100):
        console.log('A')
        break
    case (number >= 80 && number <= 89):
        console.log('B')
        break
    case (number >= 70 && number <= 79):
        console.log('C')
        break
    case (number >= 60 && number <= 69):
        console.log('D')
        break
    case (number >= 0 && number <= 59):
        console.log('F')
        break
    default:
        console.log('invalid score')
        break

}

// 2) for loop-ის გამოყენებით დაბეჭდეთ რიცხვები 1-დან 10-მდე

for(let i = 1;i <= 10; i ++){
    console.log(i)
}

// 3) for loop- ის გამოყენებით დაბეჭდეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები

for(let i = 0;i <= 20; i += 2){
    console.log(i)
}

// // 4) for loop-ის გამოყენებით დაბეჭდეთ 1-დან 5-ის ჩათვლით ციფრების კვადრატები

for(let i = 0;i <= 5; i ++){
    console.log(i ** 2)
}

// // 5) for loop-ის გამოყენებით დაბეჭდეთ რიცხვები 35-დან 15-მდე

for(let i = 35;i <= 15; i --){
    console.log(i)
}

// 2) კომენტარით ახსენით რაში გვეხმარება break keyword-ი.

// break ის საშუალებით ვწყვიტავთ კოდს რომელიღაცა იტერაციაში

// 3) დაწერეთ ციკლი, რომელიც მასივში ეძებს პირველ ლუწ რიცხვს. დაბეჭდეთ, შემდეგ ამოაგდეთ ეს რიცხვი სიიდან და გაწყვიტეთ პოვნის შემდეგ loop-ი.

var evenn = [1, 3, 5, 7, 8]
for(let i = 0; i < evenn.length; i++){
    if (i % 2 == 0){
        console.log(i)
        break;
    }
}

// 4) მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს 'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.

var admin = 'admin123';
var prom = prompt('enter password: ')

while (admin != prom){
    console.log('wrong passsword, try again')
    prom = prompt('enter password: ')
}
console.log('Access Granted');
// 5) შექმენით მასივი, სადაც ჩაწერთ 5 საყვარელი ფილმის/სერიალის სახელწოდებას. დაბეჭდეთ სიიდან პირველი და ბოლო ელემენტები at() მეთოდის გამოყენებით.  შემდეგ კი ამოშალეთ მასივიდან მეორე და მეოთხე ინდექსზე მდგომი ელემენტები.

var film = ['fast end fourios', 'Prison break ', 'Rush Hour', 'Gladiator', 'The Matrix']
console.log(film.at(0))
console.log(film.at(-1))

film.pop()
film.shift()
console.log(film)

// 6) მოცემულია მასივი:
// ['one', 'two']

var nn = ['one', 'two'];
nn.unshift('one')
nn.shift()
console.log(nn)

// გამოიყენეთ shift/unshift იმისთვის რომ:
// • მასივის დასაწყისში დაამატოთ 'one'
// • ამოშალოთ პირველი ელემენტი

// საბოლოო შედეგი კონსოლში გამოიტანეთ.

// 7) შეასრულეთ პროექტი მხოლოდ HTML&CSS-ის გამოყენებით:
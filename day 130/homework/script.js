// 2) შექმენი ერთი global ცვლადი და ერთი local ცვლადი ფუნქციაში.
// დაბეჭდე ორივე და ნახე რომელი იმუშავებს.

let namee = 'enrike'
function lcl(){
    let nn = 'enro'
}

console.log(namee)
console.log(nn)

// 3) 

function test() {
    let x = 10;
}
console.log(x)

// ახსენით რა არის შეცდომა და როგორ უნდა გავასწოროთ 
// შეცდომაა რადგან ფუნქციაში გვაქ შექმნილი ცვლადი და მის გარეთ მას ვერგამოვიძახებთ ან ფუნქციაში გამოვიძახოტ console ით ან ცვლადი შევქმნათ ფუნქციის გარეთ 

// 4) let name = "Anna";

function showName() {
    let name = "Luka";
    console.log(name);
}
showName();
console.log(name);
// რას გამოიტანს მოცემული კოდი ? ახსენით რატომ
// ჯერ გამოიტანს luka ს შემდეგ erorს რადგან ფუნქციაში შექმნილ ცვლადს ვერგამოვიძახებთ მის გარეთ!
// 2) გადახედეთ რესურსებს და თავიდან გაიაზრეთ თითოეული კოდის სინტაქსი + მათი მუშაობის პრინციპი. 

// 3) შეადარეთ ისინი ერთმანეთს ყველა ძირითადი შედარების ოპერატორით (>, <, >=, <=, ==, ===, !=) და შედეგები დაბეჭდეთ კონსოლში.

let a = 5;
let b = "5";

console.log(a > b);    // false
console.log(a < b);    // false
console.log(a >= b);   // true
console.log(a <= b);   // true
console.log(a == b);   // true  (მნიშვნელობა ტოლია, ტიპი არა)
console.log(a === b);  // false (ტიპიც განსხვავებულია)
console.log(a != b);   // false

// 4) შექმენით ცვლადი age. თუ age ნაკლებია 18-ზე → დაბეჭდეთ "You are underaged"
// age 18–ზე მეტია ან ტოლია → დაბეჭდეთ "You are adult"

let age = 15;

if(age < 18){
    console.log("You are underaged")
}else{
    console.log("You are adult")
}

// 5) შექმენით ორი Boolean ცვლადი:
// isStudent და hasAccess. ლოგიკური ოპერატორების გამოყენებით დაადგინეთ შეუძლია თუ არა მოსწავლეს სისტემაში შესვლა. (განიხილეთ ყველა შესაძლო შემთხვევა)

let isStudent = true;
let hasAccess = false;

if (isStudent && hasAccess) {
    console.log("შესვლა ნებადართულია");
} else {
    console.log("შესვლა აკრძალულია");
}

// 6) შექმენით ცვლადი score. გამოიყენეთ Conditial Statement-ები ქულების შესამოწმებლად და კონსოლში გამოიტანეთ შესაბამისი პასუხები.
// თუ:
// score >= 90 → "A"
// score >= 70 → "B"
// score >= 50 → "C"
// სხვა შემთხვევაში → "F"

let score = 100;

if(score >= 90){
    console.log('A')
}else if(score >= 70 && score < 90){
    console.log('B')
}else if(score >= 50 && score < 70){
    console.log('C')
}else{
    console.log('F')
}

// 7) შექმენით ორი ცვლადი password და confirmPassword. შეამოწმეთ
// • ემთხვევა თუ არა ისინი ერთმანეთს
// • არის თუ არა პაროლი მინიმუმ 8 სიმბოლოსგან შემდგარი
// შედეგი დაბეჭდეთ კონსოლში.

let password = 12345678;
let confirmPassword = 12345678;

if(password === confirmPassword && password.length >= 8){
    console.log('correct!')
}else{
    console.log('not correct!')
}

// 8) შექმენით ორი რიცხვითი ცვლადი.
// შეამოწმეთ:
// ორივე მეტია თუ არა 10-ზე (&&)
// ერთ-ერთი მაინც მეტია თუ არა 10-ზე (||)

let num1 = 20;
let num2 = 5;

if(num1 >= 10 && num2 >= 10){
    console.log('ორივე მეტია 10-ზე')
}else if(num1 >= 10 || num2 >= 10){
    console.log('ერთერთი რიცხვი მეტია 10 ზე მოერე რიცხვი კი არა!')
}else{
    console.log('ორივე რიცხვი ნაკლებია 10-ზე')
}


// 9) შექმენით ცვლადი dayNumber (1–დან 7-მდე).
// if / else გამოყენებით დააბრუნეთ კვირის შესაბამისი დღე
// (1 → ორშაბათი, 7 → კვირა).

let dayNumber = 5;

if (dayNumber === 1){
    console.log('Monday')
}else if(dayNumber === 2){
    console.log('Tuesday')
}else if(dayNumber === 3){
    console.log('Wednesday')
}else if(dayNumber === 4){
    console.log('Thursday')
}else if(dayNumber === 5){
    console.log('Friday')
}else if(dayNumber === 6){
    console.log('Saturday')
}else if(dayNumber === 7){
    console.log('Sunday')
}else{
    console.log(none)
}

// 10) შექმენით ცვლადი username.
// თუ:
// ცარიელია → "Username is required"
// სიგრძე ნაკლებია 4-ზე → "Username is too short"
// სხვა შემთხვევაში → "Username accepted"

let username = 'enrike';

if(username.length === 0){
    console.log('Username is required')
}else if(username.length < 4){
    console.log('Username is too short')
}else{
    console.log('Username accepted')
}

// 11) შექმენით ცვლადი isLoggedIn.
// თუ false არის, ! ოპერატორის გამოყენებით დაბეჭდეთ
// "Please log in".

let isLoggedIn = false;

if(isLoggedIn === false){
    console.log('Please log in')
}

// 12) ახსენით განსხვავება
// == და ===
// && და || ოპერატორებს შორის. მოიყვანეტ მაგალითები.

// == და === განსხვავება

// == (არამკაცრი შედარება)
// ადარებს მხოლოდ მნიშვნელობებს და საჭიროების შემთხვევაში ცვლის ტიპებს
console.log(5 == "5");          // true
console.log(true == 1);         // true
console.log(null == undefined); // true


// === (მკაცრი შედარება)
// ადარებს მნიშვნელობასაც და ტიპსაც, ტიპებს არ ცვლის
console.log(5 === "5");         // false
console.log(true === 1);        // false
console.log(null === undefined);// false



// && და || განსხვავება

// && (AND — და)
// შედეგი true იქნება მხოლოდ მაშინ, როცა ორივე პირობა trueა
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && false);  // false

let isStudents = true;
let hasAccesss = false;
console.log(isStudents && hasAccesss); // false


// || (OR — ან)
// შედეგი true იქნება, თუ ერთი მაინც პირობა trueა
console.log(true || false);   // true
console.log(false || true);   // true
console.log(false || false);  // false

let isAdmin = false;
let isTeacher = true;
console.log(isAdmin || isTeacher); // true

// 13) ცვლადში შინახეთ ტემპერატურა. გრადუსის მიხედვით გამოიტანეთ:

// temp < 0 → "Freezing"
// 0–20 → "Cold"
// 21–30 → "Warm"
// 30 → "Hot"

let celsius = 40;

if(celsius > 30){
    console.log('Hot!')
}else if(celsius > 0 && celsius <= 20){
    console.log('Cold!')
}else if(celsius > 20 && celsius < 30){
    console.log('Warm')
}else{
    console.log('Freezing')
}

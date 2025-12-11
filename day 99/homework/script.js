// 2) ახსენით რისთვის გვჭირდება მეთოდები JavaScript-ში. ჩამოწერეთ და განმარტეთ დღეს ნასწავლი ყველა მეთოდი.

// მეთოდები გვაძლევს საშუალებას სტრინგებს, მასივებს ან სხვა ობიექტებს დავუმუშავოთ მარტივად, მაგალითად: ცვლილება, გაერთიანება, გაწმენდა, შემოწმება და ა.შ.
// toUpperCase() → სტრინგი დიდ ასოებად გარდაქმნის

// toLowerCase() → სტრინგი პატარა ასოებად გარდაქმნის

// startsWith() → შემოწმებს იწყება თუ არა სტრინგი კონკრეტული სექვენციით

// endsWith() → შემოწმებს მთავრდება თუ არა სტრინგი კონკრეტული სექვენციით

// trim() → აშორებს ზედმეტ სივრცეებს სტრინგის თავიდან და ბოლოს

// concat() → სტრინგების გაერთიანება

// Math.random() →  რენდომ რიცხვი

// Math.floor() → იღებს რიცხვს და დასძენს მთელ ნაწილს ქვემოთ

// Math.round() → რიცხვის ამრგვალება სტანდარტულად

// 3) ცვლადში შეინახე სტრინგი "javascript" და გადაიყვანე დიდ ასოებად.

var myName;
myName = 'javascript'
console.log(myName.toUpperCase());

// 4) ცვლადში შეინახე სტრინგი "HELLO WORLD" და გადაიყვანე პატარა ასოებად.

var myName;
myName = 'HELLO WORD'
console.log(myName.toLowerCase());

// 5) შეამოწმე სიტყვა "Sunrise" იწყება თუ არა "Sun"-ით და დაკვირდი შედეგს კონსოლში.

var myName;
myName = 'Sunrise'
console.log(myName.startsWith('Sun')); // true

// 6) შეამოწმე მთავრდება თუ არა  "GOA Martial Arts" - "S"-ზე. დააკვირდით კონსოლს და შედეგი ახსენით კომენტარის სახით.

var myName;
myName = 'GOA Martial Arts'
console.log(myName.endsWith('S')); // false რადგან Arts მთავრდება პატარა ასოთი S კი დიდი ასოა

// 7) შეამოწმეთ:

// • "Hello" ბოლოვდება "o"-თი?

var myName;
myName = 'Hello'
console.log(myName.endsWith('o')); 

// • "document.pdf" ბოლოვდება "pdf"-ით?

var myName;
myName = 'document.pdf'
console.log(myName.endsWith('pdf')); 

// • "programming" ბოლოვდება "ing"-ით?

var myName;
myName = 'programming'
console.log(myName.endsWith('ing')); 

// 8) გამოიყენე Javascript-ის ერთ-ერთი მეთოდი იმისთვის, რომ სტრინგები - "     test" და "test      "  გაასუფთავოთ ზედმეტი Space-ებისგან.

var myName;
myName = '     test';
console.log(myName.trimStart()); 

var myName;
myName = 'test     ';
console.log(myName.trimEnd()); 

// 9) გამოიყენეთ concat() მეთოდი "Hello"-სა და "World"-ის გასაერთიანებლად.

var hello;
var word;
hello = 'hello';
word = 'word';
console.log(hello.concat(' ', word));

// 10) გამოიყენეთ concat() მეთოდი იმისთვის, რომ მიიღოთ სტრინგი - "Goal-Oriented Academy".

var goal;
var oriented;
var academy;
goal = 'Goal';
oriented = 'Oriented';
academy = 'Academy';
console.log(goal.concat('-', oriented).concat(' ', academy));

// 11) გამოიყენეთ Math.random() და ორი რენდომ რიცხვი შეინახეთ ორ სხვადასხვა ცვლადში. კონსოლში დაბეჭდეთ ამ რიცხვებს შორის შესრულებული 5 არითმეტიკული ოპერაცია.

var num;
var num2;
num = Math.random();
num2 = Math.random();
console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num ** num2);
console.log(num / num2);
console.log(num % num2);

// 12) თქვენი სიტყვებით ახსენით რა პრინციპით მუშაობს Math.floor(). რას ფიქრობთ: ემორჩილება თუ არა იგი მათემატიკური დამრგვალების სტანდარტებს ?

// Math.floor(x) აბრუნებს x-ის მთელ ნაწილს;
// არ ემორჩილება კლასიკურ მათემატიკურ დამრგვალებას;

// 13) randomNum ცვლადში შეინახეთ რიცხვი, რომელსაც Javascript-ი დააგენერირებს 0-დან 50-მდე დიაპაზონში. მიღებული შედეგი აუცილებლად დაამრგვალეთ იმისათვის, რომ მიიღოთ მთელი რიცხვი.

var randomNum = Math.floor(Math.random() * 51);
console.log(randomNum);

// 14) randomNum2 ცვლადში შეინახეთ რენდომად დაგენერირებული რიცხვი 0-დან 71-ის დიაპაზონში და შეინახეთ მთელი რიცხვის სახით.

var randomNum = Math.floor(Math.random() * 72);
console.log(randomNum);

// 15) მოიძიეთ Math ობიექტის ისეთი მეთოდი, რომელიც რიცხვებს მათემატიკური სტანდარტის გათვალისწინებით ამრგვალებს.

// Math.round() → რიცხვის ამრგვალება სტანდარტულად
// 1) შექმენით Class - ი სახელად Person, მის constructor - ს გადაეცით name, age, country მნიშვნელობები. თქვენი დავალებაა, რომ შექმნათ Class - ში ახალი მეთოდი სახელად introduce რომელიც console-ში გამოიტანს მომხმარებლის ინფორმაციას მაგალითად `Hello my name is ${name} , i am ${age} years old and I am from ${country}`, შექმნით ხუთი მომხმარებლის ობიექტი და გამოიძახეთ შესაბამისი მეთოდი

class Person{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    introduce(){
        return `Hello my name is ${this.name} , i am ${this.age} years old and I am from ${this.country}`;
    }
}

const person1 = new Person('michael', 33, 'U.S.A');
const person2 = new Person('Alex', 39, 'U.S.A');
const person3 = new Person('Sara', 28, 'U.S.A');
const person4 = new Person('john', 19, 'United kingdom');
const person5 = new Person('Enrike', 15, 'Georgia');
console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());
console.log(person4.introduce());
console.log(person5.introduce());

// 2) შექმენით Class - ი სახელად Rectangle, მის constructor - ს გადაეცით ორი მნიშვნელობა width, height, შექმენით მეთოდი სახელად getarea რომელიც გამოითვლის ამ rectangle - ის ფართობს და getPerimeter რომელიც გამოითვლის მის პერიმეტრს. შექმენით სამი ობიექტი და გამოიძახეთ შესაბამისი მეთოდები

class rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getarea(){
        return `area: ${this.width * this.height}`
    }
    getPerimeter(){
        return `perimeter: ${(this.width + this.height) * 2}`
    }
}

const rectangle1 = new rectangle(10, 20);
const rectangle2 = new rectangle(1, 90);
const rectangle3 = new rectangle(200, 10);

console.log(rectangle1.getarea());
console.log(rectangle2.getarea());
console.log(rectangle3.getarea());
console.log(rectangle1.getPerimeter());
console.log(rectangle2.getPerimeter());
console.log(rectangle3.getPerimeter());

// 3) შექმენი კლასი სახელად Book, რომლის constructor იღებს title,pages,year მნიშვნელობებს,შექმენი მეთოდი სახელად getBookInfo თუ pages > 300 დააბრუნოს: This book is called ${title}, it has ${pages} pages and was released in ${year}. შექმენით სამ ობიექტი და გამოიძახეთ შესაბამისი მეთოდები

class book{
    constructor(title, pages, year){
        this.title = title;
        this.pages= pages;
        this.year = year;
    }
    getBookInfo(){
        if(this.pages >= 300){
            return `This book is called ${this.title}, it has ${this.pages} pages and was released in ${this.year}`;
        }else{
            return 'this book haven`t6 300 pages'
        }
    }
}

const book1 = new book('Can`t hurt me', 414, 2018);
const book2 = new book('random', 114, 2016);
const book3 = new book('random', 914, 2018);
console.log(book1.getBookInfo());
console.log(book2.getBookInfo());
console.log(book3.getBookInfo());

// 4) შექმენით კლასი სახელად Student, რომლის constructor - ი მიიღებს ორ მნიშვნელობას: name და score.შექმენით მეთოდი სახელად checkResult, რომელიც შეამოწმებს სტუდენტის ქულას და დააბრუნებს შესაბამის ტექსტს. თუ სტუდენტის ქულა არის 75-ზე მეტი ან ტოლი, მეთოდმა უნდა დააბრუნოს `Student ${name} successfully passed the exam with a score of ${score}`, სხვა შემთხვევაში უნდა დააბრუნოს `Student ${name} failed the exam with a score of ${score}`

class Student{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    checkResult(){
        if(this.score >= 75){
            return `Student ${this.name} successfully passed the exam with a score of ${this.score}`;
        }else{
            return `Student ${this.name} failed the exam with a score of ${this.score}`;
        }
    }
}
const Student1 = new Student('Enrike', 100);
const Student2 = new Student('Temo', 60);
const Student3 = new Student('Giga', 99);
console.log(Student1.checkResult());
console.log(Student2.checkResult());
console.log(Student3.checkResult());

// შექმენით კლასი სახელად Student, რომლის constructor მიიღებს მნიშვნელობებს
// name
// scores (მასივი  სხვადასხვა გამოცდის ქულებით, მაგალითად [60, 80, 75, 91]). 

// შექმენით მეთოდი getFinalResult, რომელიც
// 1)გამოითვლის სტუდენტის საშუალო ქულას (average)
// 2)დააბრუნებს ტექსტს
//  თუ საშუალო ქულა არის 70 ან მეტი:Student ${name} passed with an average score of ${average}
//  სხვა შემთხვევაში:Student ${name} failed with an average score of ${average}

// შექმენით ხუთი ობიექტი და გამოიძახეთ შესაბამისი მეთოდი

class StudentC{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    getFinalRes(){
        let average = this.score.reduce((acc, cur) => acc + cur, 0) / this.score.length;
        if(average >= 70){
            return `Student ${this.name} passed with an average score of ${average}`;
        }else{
            return `Student ${this.name} failed with an average score of ${average}`;
        }
    }
}
const studentC1 = new StudentC('Enrike', [80, 60, 100, 90]);
const studentC2 = new StudentC('Saba', [100, 60, 50, 10]);
const studentC3 = new StudentC('irakli', [40, 60, 90, 30]);
const studentC4 = new StudentC('sandro', [60, 60, 100, 30]);
const studentC5 = new StudentC('john', [70, 90, 90, 80]);
console.log(studentC1.getFinalRes());
console.log(studentC2.getFinalRes());
console.log(studentC3.getFinalRes());
console.log(studentC4.getFinalRes());
console.log(studentC5.getFinalRes());
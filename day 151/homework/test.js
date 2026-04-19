// შექმენით კლასი სახელად Student, რომლის constructor მიიღებს მნიშვნელობებს
// name
// scores (მასივი  სხვადასხვა გამოცდის ქულებით, მაგალითად [60, 80, 75, 91]). 

// შექმენით მეთოდი getFinalResult, რომელიც
// 1)გამოითვლის სტუდენტის საშუალო ქულას (average)
// 2)დააბრუნებს ტექსტს
//  თუ საშუალო ქულა არის 70 ან მეტი:Student ${name} passed with an average score of ${average}
//  სხვა შემთხვევაში:Student ${name} failed with an average score of ${average}

// შექმენით ხუთი ობიექტი და გამოიძახეთ შესაბამისი მეთოდი

class Student{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    getFinnalRes(){
        let average = this.score.reduce((acc, curr) => acc + curr, 0) / this.score.length
        if(average >= 70){
            return `Student ${this.name} passed with an average score of ${average}`
        }else{
            return `${this.name} failed with an average score of ${average}`
        }
    }
}
let student1 = new Student('Enrike', [70, 90, 50, 100]);
let student2 = new Student('saba', [90, 10, 40, 60]);
let student3 = new Student('nika', [70, 40, 90, 100]);
let student4 = new Student('temo', [100, 30, 90, 10]);
let student5 = new Student('irakli', [10, 50, 70, 50]);

console.log(student1.getFinnalRes());
console.log(student2.getFinnalRes());
console.log(student3.getFinnalRes());
console.log(student4.getFinnalRes());
console.log(student5.getFinnalRes());
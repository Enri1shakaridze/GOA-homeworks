// 1) შექმენით ობიექტი სახელად book, რომელსაც ექნება თვისებები: title, author და year შემდეგ, console.log()-ით გამოიტანეთ წიგნის ავტორი.

const book = {
    title: 'transformer 2',
    author: 'qweqweqwe',
    year: 2007
}

console.log(book.author)

// 2) გამოიყენეთ წინა დავალებაში შექმნილი book ობიექტი. შეცვალეთ წიგნის year property უფრო ახალი წლით და დაბეჭდეთ მთლიანი ობიექტი კონსოლში.

book.year = 2010

console.log(book)

// 3) შექმენით ობიექტი user, რომელსაც ექნება თვისებები name და age. შემდეგ, დაამატეთ ამ ობიექტს ახალი თვისება email. ბოლოს, დაბეჭდეთ ობიექტი.

const User = {
    name: 'john wick',
    age: 30
}

User.email = 'johnwick@gmail.com'

console.log(User)

// 4) შექმენით ობიექტი calculator, რომელსაც ექნება ორი property: num1 და num2. დაამატეთ ამ ობიექტს მეთოდი add, რომელიც დააბრუნებს num1-ისა და num2-ის ჯამს. გამოიძახეთ ეს მეთოდი და დაბეჭდეთ შედეგი

const Calculator = {
    num1: 20,
    num2: 40,

    add: function(n){
        n = this.num1 + this.num2
        console.log(n)
    }
}

Calculator.add()
console.log(Calculator)

// 5) შექმენით ობიექტი person, რომელსაც ექნება property firstName, lastName და მეთოდი sayHello. მეთოდმა უნდა გამოიტანოს "გამარჯობა, მე ვარ [სახელი] [გვარი]".

const person = {
    firstName: 'Enrike',
    lastName: 'shakaridze',
    
    sayHello: function(f, l) {
        f = this.firstName
        l = this.lastName
        console.log(`hello, i'm ${f} ${l}`)
    }
}

person.sayHello()
// 2) შექმენი ობიექტი user, კუთვნილებებით: name, age, city. თქვენი ამოცანაა დესტრუქტურიზაციის გამოყენებით ამოიღოთ ცვლადებში name, age და city.

const user = {namee: 'Enrike', age: 15, city: 'batumi'}
let {namee, age,  city} = user
console.log(namee)
console.log(age)
console.log(city)
console.log('')

// 3) მოცემულია მასივი colors. დესტრუქტურიზაციის გამოყენებით პირველი ორი ფერი შეინახეთ ცვლადებში first და second, ხოლო დანარჩენი ფერები მოათავსეთ ახალ მასივში სახელად others (გამოიყენეთ Rest ოპერატორი).

const colors = ["Black", "Red", "Blue", "Yellow", "Purple"];
let [one, two, ...others] = colors
console.log(one)
console.log(two)
console.log(others)
console.log('')

// 4) შექმენით ორი მასივი: fruits1, fruits2. შექმენით მესამე მასივი allFruits, რომელიც შეიცავს ორივე მასივის ელემენტებს Spread ოპერატორის გამოყენებით.

const fruits1 = ['banana', 'apple']
const fruits2 = ['orange', 'blubery']
let allFruits = [...fruits1, ...fruits2]
console.log(allFruits)
console.log('')

// 5) შექმენით ობიექტი updatedStudent, რომელიც იქნება student ობიექტის ასლი, მაგრამ მასში grade იქნება შეცვლილი (მაგალითად: "A") და დამატებული ექნება ახალი თვისება isGraduated: true.

const student = {
    name: 'Enrike', 
    age: 15,
    grade: 'B'
}

const updatedStudent = {
    ...student,
    grade: 'A',
    isGraduated: true
}
console.log(updatedStudent)
console.log('')

// 6) დაწერე ფუნქცია calculateTotal, რომელიც მიიღებს განუსაზღვრელი რაოდენობის რიცხვებს (Rest), შეკრებს მათ და დააბრუნებს ჯამს.

function calculateTotal(...num){
    let res = num.reduce((acc, curr) => acc + curr, 0)
    console.log(res)
}
calculateTotal(1,2,3,4,5)
// calculateTotal([1,2,3,4,5]) errorr

// BONUS
// -----
// გაქვს ობიექტი, სადაც ჩაშენებულია (nested) ობიექტი:

const company = {
    title: "Smart Tech",
    location: {
        city1: "Tbilisi",
        street: "Tsereteli Street"
    }
};

// დესტრუქტურიზაციის გამყენებით ერთ ხაზში ამოიღეთ ცვლადში პირდაპირ city.

let {city1} = company.location
console.log(city1)
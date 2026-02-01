// 1) შექმენით ფუნქცია Sum, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.

function summ(x = 5, y = 10){
    return x + y
}
console.log(summ(1, 9))
console.log(summ())

// 2) შექმენით ფუნქცია Substract, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ სხვაობას. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.

function Substract(x = 10, y = 1){
    return x - y
}
console.log(Substract(20, 5))
console.log(Substract())


// 3) შექმენით ფუნქცია Multiply, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ ნამრავლს. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.

function Multiply(x = 15, y = 3){
    return x * y
}
console.log(Multiply(21, 2))
console.log(Multiply())



// 4) შექმენით ფუნქცია Divide, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ განაყოფს. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.

function Divide(x = 20, y = 4){
    return x / y
}
console.log(Divide(18, 6))
console.log(Divide())



// 5) შექმენით ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის კენტი თუ ლუწი,შედეგი დაბეჭდეთ ეკრანზე

function odd_even(number){
    if(number % 2 === 0){
        return True
    }else if(number % 2 !== 0){
        return False
    }else{
        return 'არ შეესაბამება რიცხვს'
    }
}
console.log(number(9))
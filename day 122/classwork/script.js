// 1) შექმენით ფუნქცია სახელად calculateRectangle რომელიც გამოითვლის მართკუთხედის ფართობს და შემდეგ დააბრუნებს,ასევე გამოიყენეთ Default არგუმენტები

function calculateRectangle(s=10, y=5){
    return s * y
}
console.log(calculateRectangle(10, 5))


// 2) https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

function filter_list(l) {
    let result = []
    for(let i = 0; i < l.length; i++){
    if(typeof l[i] === 'number' ){
        result.push(l[i])
    }
    }
    return result
}
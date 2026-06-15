// 0) მოიძიეთ და დაიზეპირეთ HTTP status კოდები.

// გადაიმეორეთ გავლილი მასალა პრაქტიკული დავალებებით:

// 1) დაწერე ფუნქცია რომელიც გაფილტრავს ლუწებს და იპოვი მათ საშუალოს [1,2,3,4,5,6]

function geteven(...num){
    num = num.filter((x) => x % 2 === 0)
    num = num.reduce((acc, curr) => acc + curr, 0) / num.length
    console.log(num)
}
geteven(1,2,3,4,5,6)

// 2) დაწერე ფუნქცია, რომელიც დაითვლის სიტყვების რაოდენობას წინადადებაში.
// let = "I love JavaScript"

function getalp(str){
    str = str.split(' ')
    console.log(str.length)
}
getalp("I love JavaScript")

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.

function geteasy(easy){
    let count = 0;
    for(let i = 1; i < easy + 1; i++){
        if(easy % i === 0){
            count ++
        }
    }
    count === 2 ? console.log(true) : console.log(false) 
}

geteasy(2)

// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა.

function getwords(...words){
    let count = '';
    for(let i = 0; i < words.length; i++){
        if(count.length < words[i].length){
            count = words[i]
        }
    }
    console.log(count)
}

getwords("dog", "elephant", "cat", "hippopotamus")

// 5) let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება ყველაზე ბევრჯერ.

function getmost(...num){
    let count = 0;
    let number = 0;
    for(let i = 0; i < num.length; i++){
        const mostnum = num.filter(x => x === num[i])
        if(mostnum > count){
            count = mostnum;
            number = num[i]
        }
    }
    console.log('ყველაზე მეტჯერ მეორდება', number, '-ი', count.length, 'ჯერ')
}

getmost(3, 5, 3, 2, 5, 5, 3, 5)

// 6) let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუნქცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია

function evenodd(...num){
    let even = 0;
    let odd = 0;
    for(let i = 0; i < num.length; i++){
        if(num[i] % 2 === 0) even++ 
        else odd++
    }
    console.log('ლუწები მეორდება', even, '-ჯერ', 'კენტები', odd, '-ჯერ')
}

evenodd(1, 2, 3, 4, 5, 6, 7, 8)

// 7) let nums = [10, 2, 33, 5, 7] დაწერე ფუნქცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს

function getlow(...num){
    let number = num[0];
    for(let i = 0; i < num.length; i++){
        if(number > num[i]){
            number = num[i]
        }
    }
    console.log(number)
}

getlow(10, 2, 33, 5, 7)
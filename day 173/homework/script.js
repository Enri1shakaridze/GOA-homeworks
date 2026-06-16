// 0) მოიძიეთ და დაიზეპირეთ HTTP status კოდები.

// 100 Continue
// 101 Switching Protocols
// 102 Processing
// 103 Early Hints
// 200 OK
// 201 Created
// 202 Accepted
// 203 Non-Authoritative Information
// 204 No Content
// 205 Reset Content
// 206 Partial Content
// 207 Multi-Status
// 208 Already Reported
// 226 IM Used
// 300 Multiple Choices
// 301 Moved Permanently
// 302 Found
// 303 See Other
// 304 Not Modified
// 307 Temporary Redirect
// 308 Permanent Redirect
// 400 Bad Request
// 401 Unauthorized
// 402 Payment Required
// 403 Forbidden
// 404 Not Found
// 405 Method Not Allowed
// 406 Not Acceptable
// 407 Proxy Authentication Required
// 408 Request Timeout
// 409 Conflict
// 410 Gone
// 411 Length Required
// 412 Precondition Failed
// 413 Content Too Large
// 414 URI Too Long
// 415 Unsupported Media Type
// 416 Range Not Satisfiable
// 417 Expectation Failed
// 418 I'm a teapot
// 421 Misdirected Request
// 422 Unprocessable Content
// 423 Locked
// 424 Failed Dependency
// 425 Too Early
// 426 Upgrade Required
// 428 Precondition Required
// 429 Too Many Requests
// 431 Request Header Fields Too Large
// 451 Unavailable For Legal Reasons
// 500 Internal Server Error
// 501 Not Implemented
// 502 Bad Gateway
// 503 Service Unavailable
// 504 Gateway Timeout
// 505 HTTP Version Not Supported
// 506 Variant Also Negotiates
// 507 Insufficient Storage
// 508 Loop Detected
// 510 Not Extended
// 511 Network Authentication Required

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
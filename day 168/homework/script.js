// 1) მოიძიეთ და დაიზეპირეთ HTTP status კოდები.

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

// 2) გამოიყენე fetch() და .then() მეთოდი, რათა წამოიღო მომხმარებლების სია Api-დან: (https://jsonplaceholder.typicode.com/users).
//  დაბეჭდე კონსოლში მხოლოდ მომხმარებლების სახელი (name) და ელ-ფოსტა (email).

// async function getAPI1(API) {
//     let response = await fetch(API);
//     let data = await response.json();
//     for(let i = 0; i < data.length; i++){
//         console.log('name is', data[i].name, 'email is', data[i].email)
//     }
// }

// getAPI1('https://jsonplaceholder.typicode.com/users')


// function getAPI1(api){
//     return fetch(api).then((res) => res.json()).then((data) =>{
//         for(let i = 0; i < data.length; i++){
//             console.log('name is', data[i].name, 'email is', data[i].email )
//         }
//     })
// }
// getAPI1('https://jsonplaceholder.typicode.com/users')

// 3) სცადე მონაცემების წამოღება არასწორი ლინკიდან (მაგ: https://jsonplaceholder.typicode.com/wrong-endpoint).
// გამოიყენე .catch() მეთოდი, რათა შეცდომა არ გაეპაროს პროგრამას და კონსოლში გამოიტანო ტექსტი: "დაფიქსირდა შეცდომა მონაცემების წამოღებისას".

// function getAPI2(API){
//     return fetch(API)
//             .then((data) => {
//                 if(!data.ok) throw new Error("დაფიქსირდა შეცდომა მონაცემების წამოღებისას")
//                 console.log(data.json())
//             })
//             .catch((err) => {
//                 console.error("დაფიქსირდა შეცდომა მონაცემების წამოღებისას")
//             })
// }
// getAPI2('https://jsonplaceholder.typicod.com/wrong-endpoint')

// 4) გამოიყენე Dog API (https://dog.ceo/api/breeds/image/random).
// წამოიღე სურათის ლინკი, შექმენი HTML-ში <img> თეგი და ეს ლინკი ჩაუსვი src ატრიბუტად, რომ სურათი ეკრანზე გამოჩნდეს.

// async function DogAPI(API) {
//     let response = await fetch(API);
//     let data = await response.json();
//     let imgsrc = data.message;
//     let img = document.createElement('img');
//     let div = document.querySelector('.img');
//     img.src = imgsrc;
//     div.appendChild(img)
// }
// DogAPI('https://dog.ceo/api/breeds/image/random');

// 5) დაწერე ასინქრონული ფუნქცია (async/await), რომელიც წამოიღებს პოსტებს ლინკიდან: https://jsonplaceholder.typicode.com/posts.
// გაფილტრე მიღებული მასივი და კონსოლში დაბეჭდე მხოლოდ ის პოსტები, რომელთა userId არის 10-სა და 30-ს შორის.

// async function getAPI4(API) {
//     let response = await fetch(API);
//     let data = await response.json();
//     for(let i = 0; i < data.length; i++){
//         if(data[i].id >= 10 && data[i].id <= 30){
//             console.log(data[i])
//         }
//     }
// }

// getAPI4('https://jsonplaceholder.typicode.com/posts')

// 6) https://jsonplaceholder.typicode.com/todos
// მოცემული API-დან წამოიღე დავალებების სია და ეკრანზე (HTML-ში) გამოიტანე სია (<ul>), სადაც შესრულებული დავალებები (completed: true) იქნება მწვანე ფერის, ხოლო შეუსრულებელი - წითელი.

// async function getPI5(API) {
//     let response = await fetch(API);
//     let data = await response.json();
//     let ul = document.querySelector('ul');
//     for(let i = 0; i < data.length; i++){
//         if(data[i].completed){
//             let li = document.createElement('li');
//             li.textContent = data[i].title;
//             li.style.color = 'green'
//             ul.appendChild(li);
//         }else if(!data[i].completed){
//             let li = document.createElement('li');
//             li.style.color = 'red'
//             li.textContent = data[i].title;
//             ul.appendChild(li);
//         }
//     }
//     console.log(data)
// }

// getPI5('https://jsonplaceholder.typicode.com/todos')

// 7) ამოიღე ინფორმაცია კონკრეტულ მომხმარებელზე და მის პოსტებზე ერთდროულად. Promise.all- ის გამოყენებით დაელოდე ორივე request-ის დასრულებას და მხოლოდ ამის შემდეგ დაბეჭდე შედეგი.
// https://jsonplaceholder.typicode.com/users/1
// https://jsonplaceholder.typicode.com/posts?userId=1

// async function getpromises(API1, API2) {
//     let response1 = await fetch(API1);
//     let response2 = await fetch(API2);
//     let data1 = await response1.json();
//     let data2 = await response2.json();
//     console.log(data1);
//     console.log(data2);
// }

// getpromises('https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/posts?userId=1')

// function getapi1(api1, api2){
//     return Promise.all([
//         fetch(api1).then((res) => res.json()),
//         fetch(api2).then((res) => res.json())
//     ]).then((data) => {
//         console.log(data)
//     })
// }

// getapi1('https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/posts?userId=1')

// 1) წამოიღეთ user-ები Promise-ებით. (გაჰენდლეთ then & catch-ით)
// https://jsonplaceholder.typicode.com/users

function getAPI(API){
    return fetch(API).then((data) => console.log(data)).catch((err) => console.error(err))
}
getAPI('https://jsonplaceholder.typicode.com/users')

// 2) წამოიღეთ post-ები Async/Await. (გაჰენდვლის გარეშე)
// https://jsonplaceholder.typicode.com/posts


async function getAPI2(API){
    let res = await fetch(API);
    let response = await res.json()
    console.log(response) 
}
getAPI2('https://jsonplaceholder.typicode.com/posts')
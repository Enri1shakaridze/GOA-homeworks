// 1) დაასრულეთ 183-ე Level-ის დავალებები

// 2) ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა.

const fs = require('fs/promises')

// async function main() {
//     await fs.writeFile('data.json', JSON.stringify('Enrike'))
//     let read = await fs.readFile('data.json', 'utf-8')
//     let res = JSON.parse(read)
//     console.log(res)
// }

// main()

// 3) შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ passed.json - ში.


// let user = [
//     {
//         name: 'Enrike',
//         score: 90,
//         passed: true,
//     },
//     {
//         name: 'sandro',
//         score: 40,
//         passed: true,
//     },
//     {
//         name: 'saba',
//         score: 70,
//         passed: true,
//     }
// ]

// async function main2() {
//     await fs.writeFile('students.json', JSON.stringify(user))
//     let read = await fs.readFile('students.json', 'utf-8')
//     let res = JSON.parse(read)
//     res = res.filter(x => x.score >= 50)
//     await fs.writeFile('passed.json', JSON.stringify(res))
//     console.log(res)
// }

// main2()


// 4) წაიკითხე "users.json", და წაშალე ყველა, ვისაც არ აქვს "@" ელფოსტაში. განაახლე users.json.
// let user2 = [
//     { "name": "Gio", "email": "gio@gmail.com" },
//     { "name": "Nika", "email": "nikaexample.com" },
//     { "name": "Mariam", "email": "mariam@gmail.ge" },
//     { "name": "Lasha", "email": "lashagmail.ge" },
//     { "name": "Ana", "email": "ana@gmail.com" }
// ]

// async function main3() {
//     await fs.writeFile('users.json', JSON.stringify(user2))
//     let read = await fs.readFile('users.json', 'utf-8')
//     let res = JSON.parse(read)
//     res = res.filter(x => x.email.includes('@'))
//     await fs.writeFile('users.json', JSON.stringify(res))
//     console.log(res)
// }

// main3()
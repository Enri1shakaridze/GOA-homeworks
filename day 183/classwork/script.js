// 1) ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა

const fs = require('fs/promises')

// async function main() {
//     await fs.writeFile('file.txt', 'hello')
//     let read = await fs.readFile('file.txt', 'utf-8')
//     console.log(read.length)
// }
// main()

// 2) ერთი ფაილიდან წაიკითხე ტექსტი, გადაატრიალე (reverse) და ჩაწერე სხვა ფაილში

async function main2() {
    let read2 = await fs.readFile('file.txt', 'utf-8');
    read2 = read2.split('').reverse().join('')
    await fs.writeFile('file2.txt', read2)
}

main2()
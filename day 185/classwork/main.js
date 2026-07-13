
// 1) შექმენით products.json, რომელშიც პროდუქტების სიას ჩაწერთ. წაიკითხეთ ეს ფაილი, ამოიღეთ ინფორმაცია და ახალ updated.json-ში ჩაწერეთ, მხოლოდ ის პროდუქტები, რომელთა ფასი 5 $-ზე ნაკლებია.
const fs = require('fs/promises')

let products = [
    {
        name: 'Bread',
        quantity: 2,
        price: 10
    },
    {
        name: 'Apple',
        quantity: 2,
        price: 1
    },
    {
        name: 'Bluebery',
        quantity: 2,
        price: 4
    },
    {
        name: 'Orange',
        quantity: 2,
        price: 5
    },
    {
        name: 'chery',
        quantity: 2,
        price: 3
    }
    
]

async function main() {
    await fs.writeFile('products.json', JSON.stringify(products))
    let read = await fs.readFile('products.json', 'utf-8')
    let readRes = JSON.parse(read)
    readRes = readRes.filter(x => x.price < 5)
    await fs.writeFile('updated.json', JSON.stringify(readRes))
}
main()
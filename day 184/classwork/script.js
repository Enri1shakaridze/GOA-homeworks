const fs = require('fs/promises')

// async function main() {
//     await fs.writeFile('data.json', JSON.stringify([1,2,3]))
//     let read1 = fs.readFile('data.json', 'utf-8')
//     console.log(read1)
//     read1 = JSON.parse(read1);
//     read1 = read1.filter(x => x % 2 !== 0)
//     await fs.writeFile('res.json', JSON.stringify(read1))
// }
// main()





// 1) შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში


const user = [
    {
        name: 'Enrike',
        age: 15,
        email: 'enrike@gmail.com'
    },
    {
        name: 'Saba',
        age: 14,
        email: 'saba@gmail.com'
    }
]

async function main() {
    await fs.writeFile('data.json', JSON.stringify(user))
    let read = await fs.readFile('data.json', 'utf-8')
    read = JSON.parse(read)
    console.log(read)
}

main()


// 2) წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე



// const user = [
//     {
//         name: 'Enrike',
//         age: 19,
//         email: 'enrike@gmail.com'
//     },
//     {
//         name: 'Saba',
//         age: 14,
//         email: 'saba@gmail.com'
//     },
//     {
//         name: 'nika',
//         age: 20,
//         email: 'saba@gmail.com'
//     }
// ]

// async function main() {
//     await fs.writeFile('data.json', JSON.stringify(user))
//     let read = await fs.readFile('data.json', 'utf-8')
//     let read2 = JSON.parse(read)
//     let res = []
//     await read2.forEach(e => {
//         if(e.age >= 18){
//             res.push(e)
//         }
//     });
//     await fs.writeFile('data.json', JSON.stringify(res))
// }

// main()

// 1) საიტზე დაამატეთ 1 პარაგრაფი და 1 ღილაკი.
// ღილაკზე დაჭერისას პარაგრაფს უნდა ეცვლებოდეს ფერი და ხდებოდეს ყვითელი, mouseover-ზე უნდა იცვლებოდეს ზომა და ხდებოდეს 30px, mouseout-ზე კი უბრუნდებოდეს საწყის ზომას.
// პარაგრაფზე დაჭერისას ღილაკს უნდა ეცვლებოდეს ბორდერი დ ეს ბორდერი ხდებოდეს წითელი. mouseover-ზე უნდა იცვლებოდეს ღილაკს ზომა და ხდებოდეს 10px, mouseout-ზე კი იზრდებოდეს ზომაში (25px) და პლიუს background-ის ფერი უნდა ჰქონდეს ნაცრისფერი (grey).
const p = document.getElementById('p1')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    p.style.color = 'red';
})

btn.addEventListener('mouseover', () => {
    p.style.fontSize = '30px';
})

btn.addEventListener('mouseout', () => {
    p.style.fontSize = '16px';
})

p.addEventListener('click', () => {
    btn.style.border = '1px red'
})

p.addEventListener('mouseover', () => {
    btn.style.width = '10px';
})

p.addEventListener('mouseout', () => {
    btn.style.width = '25px';
    btn.style.backgroundColor = 'grey'
})

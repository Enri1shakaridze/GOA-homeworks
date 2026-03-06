// 2) ახსენით რას ეწოდება DOM? რას ეწოდება Rendering?

// rendering ანუ დარენდერება/დარეფრეშება საიტის ნებისმიერ ცვლილებაზე მოხდება.
// დომი - დოკუმენტის ობიექტის მოდელი. ობიექტია ყველა ელემენტი ჰტმლ ში.

// 3) html დოკუმენტში დაამატეთ პარაგრაფი, ფოტო და ღილაკი. სამივე წამოიღეთ js-ში getElementById-ის მეშვეობით და კონსოლში გამოიტანეთ თითოეული ობიქეტის მონაცემები.

const p = document.getElementById('p1')
console.log(p)

const imgg = document.getElementById('img1')
console.log(imgg)

const button = document.getElementById('but1')
console.log(button)

// 3) html დოკუმენტში დაამატეთ სამი heading: h1, h2, h3. სამივე წამოიღეთ js-ში getElementsByClassName-ის მეშვეობით და მოიძიეთ ინფორმაცია თუ როგორაა შესაძლებელი ამ ელემენტებისთვის ფერის შეცვლა js-დან. გამოიტანეთ სამივე ობიექტის მონაცემები და იპოვეთ parentNode-ი.

const h3 = document.getElementsByClassName('h1')[0]
const h2 = document.getElementsByClassName('h2')[0]
const h1 = document.getElementsByClassName('h1')[0]

console.log(h1)
console.log(h1)
console.log(h3)

// ფერის შეცვლა
// .style თი არის შესაძლებელი წინ ვუწერთ ატრიბუტის სახელს შემდეგ სტაილის შემდეგ იმ სტილს რაც გვინდა რომ შეიცვალოს

h1.style.color = 'red'
h2.style.color = 'blue'
h3.style.color = 'green'

// parentNode
console.log(h1.parentNode.tagName)
console.log(h2.parentNode.tagName)
console.log(h3.parentNode.tagName)

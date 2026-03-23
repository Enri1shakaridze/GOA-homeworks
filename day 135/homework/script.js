// 2) შექმენით ღილაკი. როდესაც მომხმარებელი დააჭერს ღილაკს, კონსოლში უნდა დაიწეროს:
// "Button clicked"

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', () => {
    console.log('button clicked')
})

// 3) HTML-ში შექმენით პარაგრაფი, რომელშიც ჩაწერთ 'Hello'-ს. დაამატეთ ღილაკი სახელით Change text. ღილაკზე დაჭერამ პარაგრაფის ტექსტი უნდა შეცვალოს 'Hello' -> 'Hello Javascript'.

const p1 = document.getElementById('p1');
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {;
    p1.textContent = 'hello javacript';
})

// 4) შექმენით ღილაკი, რომელიც დაჭერისას body-ს background color-ს შეცვლის (მაგალითად lightblue-ზე). ასევე დაამატეთ საიტზე ფოტოც. ამავე ღილაკზე mouseover-მა უნდა გაადიდოს ფოტოს სიგანე, mouseout-მა კი დააპატარაოს.

const btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => {;
    document.body.style.backgroundColor = 'lightblue';
})

const img1 = document.getElementById('img1');
img1.addEventListener('mouseover', () => {
    img1.style.width = '50px'
})
img1.addEventListener('mouseout', () => {
    img1.style.width = '10px'
})


// 5) შექმენით div-ი. როდესაც მაუსს მიიტანთ div-ზე - მისი ფერი გახდეს ლურჯი როცა მაუსს მოაშორებთ კი დაბრუნდეს თეთრ ან შავ ფერზე.

const div1 = document.getElementById('div1');
div1.style.width = '100px'
div1.style.height = '100px'
div1.style.backgroundColor = 'black'
div1.style.marginTop = '10px'


div1.addEventListener('mouseover', () => {
    div1.style.backgroundColor = 'blue';
})
div1.addEventListener('mouseout', () => {
    div1.style.backgroundColor = 'black';
})


// 6) შექმენით ღილაკი, რომელიც დაჭერისას ახალ <li> ელემენტს დაამატებს  დალაგებულ list-ში მსგავს ფორმატში:
// Item 1  
// Item 2  
// Item 3

const btn4 = document.getElementById('btn4');
const ol1 = document.getElementById('ol1');
const lst = [];

let count = 1;

btn4.addEventListener('click', () => {
    lst.push('item ' + count);
    lst.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ol1.appendChild(li)
    })
    lst.pop()
    count ++;
})

// 7) მეექვსე დავალების სიაზე დაამატეთ ასეთი ფუნქციონალი:
// დაუმატეთ სიას remove ღილაკი.
// ღილაკზე დაჭერისას სიის ბოლო ელემენტი  უნდა წაიშალოს. (გაიხსენეთ დღეს ნასწავლი მეთოდი).

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
    if(ol1.lastElementChild){
        ol1.removeChild(ol1.lastElementChild)
        count --;
    }
    
})

// ❗BONUS❗
// 8) შექმენით counter.
// გექნებათ ერთი h1, რომელიც default-ად 0 იქნება. დაამატეთ ორი ღილაკი - increase და decrease. increase ღილაკზე დაჭერამ heading-ის ტექსტი (რიცხვი) ერთით უნდა გაზარდოს. decrease-მა კი პირიქით უნდა შეამციროს.

const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');
const h1 = document.getElementById('h1')
h1.textContent = 0

increase.addEventListener('click', () => {
    h1.textContent = Number(h1.textContent) + 1;
})
decrease.addEventListener('click', () => {
    h1.textContent = Number(h1.textContent) - 1;
})

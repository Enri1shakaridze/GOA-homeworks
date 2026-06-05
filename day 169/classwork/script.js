// 1) შექმენით ფუნქცია getProducts რომლის დავალებაც იქნება, რომ გააგზავნოს მოთხოვნა ამ API - ზე: "https://fakestoreapi.com/products" და დააბრუნოს შედეგი, შემდგომ საიტზე შექმენით ერთი div ბლოკი და ღილაკი, როდესაც ღილაკზე დაკლიკება მოხდება ეს დივ ბლოკი უნდა გაივსოს პროდუქტებით

const container = document.getElementById('container');
const btn = document.getElementById('btn');

async function getfunc() {
    try{
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        return data
    }
    catch{
        console.log('error')
    }
}

btn.addEventListener('click', async () => {
    let data2 = await getfunc();
    data2.forEach(el => {
        console.log(el)
        let div = document.createElement('div');
        div.innerHTML = `
        <h1>${el.title}</h1>
        <img src="${el.image}"/>
        <h3>${el.price}</h3>
    `
    container.appendChild(div)
    });
    
})
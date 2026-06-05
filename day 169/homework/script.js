
const container = document.getElementById('container');
const cart = document.getElementById('cart');
const cart2 = document.querySelector('.cart2');
const btn = document.getElementById('btn');
const btn3 = document.getElementById('btn3');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
let res = [];
let price = 0;

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
    cart.innerHTML = '';
    cart2.id = 'cart2'
    
    data2.forEach(el => {
        let div = document.createElement('div');
        div.innerHTML = `
        <div id="div22">
            <h1>${el.title}</h1>
            <div id="divv1">
                <img src="${el.image}"/>
                <h3 id="pr">Price: $${el.price}</h3>
            </div>
        </div>
        `
    let btn2 = document.createElement('button');
    btn2.textContent = 'კალათაში დამატება';
    btn2.addEventListener('click', function(){
        if(res.includes(div.innerHTML.replace('<button>კალათაში დამატება</button>', ''))){
            alert('კალათაში უკვე დამატებულია!')
            return
        }
        
        res.push(div.innerHTML.replace('<button>კალათაში დამატება</button>', ''));
        cart.innerHTML = `${res.join('')}`

        p1.textContent = `სულ ${res.length} ერთეული`
        price += el.price;
        p2.textContent = `ფასი ჯამში $${price}`
        
    })
    
    
    div.appendChild(btn2)
    container.appendChild(div)
    });
    
})
btn3.addEventListener('click', function() {
    setTimeout(() => {
        alert('წარმატებით შეიძინეთ!');

        res = [];
        cart.innerHTML = '';
        price = 0;

        p1.textContent = `სულ ${res.length} ერთეული`;
        p2.textContent = `ფასი ჯამში ${price}`;
    }, 500);
});
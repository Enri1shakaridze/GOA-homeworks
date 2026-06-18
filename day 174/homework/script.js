let products = document.querySelector('.main-products');
let kalata = document.querySelector('.kalata');
let res = document.querySelector('.res');
let res1 = document.querySelector('.res1');
let pkalata = document.getElementById('pkalata');
let fullprice = document.getElementById('fullprice');
let bynow = document.getElementById('bynow');
let bynowtrue = document.getElementById('bynowtrue');
let price = 0;
let ln = 0;
let array = [];
let a;

async function getproducts() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        return data
    } catch (err) {
        console.log(err);
    }
}

async function screenproducts() {
    let resdata = await getproducts();
    console.log(resdata)

    resdata.forEach(product => {

        // div element(products)
        let divall = document.createElement('div');
        let div = document.createElement('div');
        let div1 = document.createElement('div');
        let div2 = document.createElement('div');

        // products info
        let ph2 = document.createElement('h2');
        ph2.textContent = product.title;
        ph2.id = 'ph2';

        let pimg = document.createElement('img');
        pimg.src = product.image;

        let pp = document.createElement('p');
        pp.textContent = `price is: $${product.price}`;
        pp.id = 'pp';

        let pbtn = document.createElement('button');
        pbtn.id = 'pbtn';
        pbtn.textContent = 'კალათაში დამატება';

        // product append div
        div1.appendChild(ph2);
        div2.appendChild(pimg);
        div2.appendChild(pp);
        div2.appendChild(pbtn);

        div.appendChild(div1);
        div.appendChild(div2);

        divall.appendChild(div);
        products.appendChild(divall);

        div.id = "div";
        div1.id = "div1";
        div2.id = "div2";
        divall.id = 'divall';

        pbtn.addEventListener('click', function () {

            for (let i = 0; i < array.length; i++) {
                if (array[i].id === product.id) {
                    let prinf = prompt('ესეთი პროდუქტი უკვე დამატებულია გსურთ კიდევ ერთის დამატება?');
                    if(prinf === 'კი' || prinf === 'yes'){
                        alert('წარმატებით დაემატა!');
                    }else{
                        return;
                    }
                }
            }

            array.push({
                id: product.id,
                dv: divall.innerHTML.replace('<button id="pbtn">კალათაში დამატება</button>', '<button id="rbtn">კალათიდან წაშლა</button>'),
                price: product.price
            });

            console.log(array);

            res1.innerHTML = '';
            price = 0

            for (let i = 0; i < array.length; i++) {
                res1.innerHTML += array[i].dv;
                price += array[i].price;
            }
            fullprice.textContent = `ჯამში $${price}`;

            ln = array.length;



            pkalata.textContent = ln;

            if (ln >= 4) {
                res1.style.marginTop = '120px';
                res1.style.marginBottom = '20px';
            }
        });
    });
}

screenproducts()

let tr = false

kalata.addEventListener('click', function () {

    if (tr) {
        res.style.animation = 'none1 0.3s';
        res.style.display = 'none';
        tr = false;
    } else {
        res.style.display = 'flex';
        res.style.animation = 'flexres 0.3s';
        tr = true;
    }

});

bynow.addEventListener('click', function () {
    if (array.length === 0) {
        alert('კალათა ცარიელია!');
        bynowtrue.style.display = 'none'

        return
    } else {
        array = [];
        price = 0;

        res1.innerHTML = ''
        bynowtrue.style.display = 'inline'
        setTimeout(() => {
            bynowtrue.style.display = 'none'
        }, 800);
        fullprice.textContent = `ჯამში $${price}`;
        pkalata.textContent = array.length;

    }
})
setInterval(() => {
    if(array.length !== 0){
        let rbtn = document.querySelectorAll('#rbtn');
        rbtn.forEach((remove, index) => {
            if (remove.className !== 'tr') {
                remove.className = 'tr';

                remove.addEventListener('click', function () {
                    array.splice(index, 1);
                    res1.innerHTML = '';
                    price = 0;

                    for (let i = 0; i < array.length; i++) {
                        res1.innerHTML += array[i].dv;
                        price += array[i].price;
                    }

                    fullprice.textContent = `ჯამში $${price}`;
                    pkalata.textContent = array.length;
                });
            }
        });
    }
}, 100);
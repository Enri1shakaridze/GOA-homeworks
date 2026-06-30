import data from "./data.json" with { type: 'json'}


let container1 = document.querySelector('.container1');
let cartres = document.querySelector('.cartres');

let nn2 = document.getElementById('nn1')
let nn1 = document.getElementById('nn2')
let her = document.getElementById('her')
let cnt = document.createElement('div');


let cart = []
let x = 0

function rendercart() {
    container1.innerHTML = ''
    data.forEach(obj => {
        let price = obj.price.toFixed(2)
        container1.innerHTML += `
            <div>
                <div>
                    <div class='childcont'>
                        <img src="${obj.image.thumbnail}">
                        <button id="btncart" class="${obj.category}"><img id="imagee" src="./assets/images/icon-add-to-cart.svg">Add to cart</button>
                        <p>${obj.category}</p>
                        <h5 id="h54">${obj.name}</h5>
                        <h5 id="h55">$${price}</h5>
                    </div>
                </div>
            </div>
        `
    })
    let btncart = document.querySelectorAll('#btncart')
    btncart.forEach(btn => {
        btn.addEventListener('click', function(){
            for(let i = 0; i < data.length; i++){
                if(data[i].category === btn.className){
                    let ex = cart.filter(item => item.obj.category === data[i].category)[0]
                    let px = cart.filter(item => item.obj.category === data[i].category)[0]
                    if(ex){
                        ex.quantity++
                        px.price += data[i].price
                    }else{
                        cart.push({
                            obj: data[i],
                            quantity: 1,
                            price: data[i].price
                        })
                    }
                    cartt()
                    return
                }
            }
            
        })
    })
}
rendercart()


function cartt(){
    cartres.innerHTML = '';
    let pr = 0;
    her.textContent = `Your Cart (${cart.length})`
    cart.forEach(obj => {
        pr += Number(obj.price)
        if(cart.length !== 0){
            nn2.style.display = 'none'
            nn1.style.display = 'none'
        }else{
            nn2.style.display = 'flex'
            nn1.style.display = 'flex'
        }
        let price = obj.obj.price.toFixed(2)

        cartres.innerHTML += `
            <div>
                <div class='childcont2'>
                    <div class="childcont21">
                        <h5 id="h54">${obj.obj.name}</h5>
                        <h5 id="h55">${obj.quantity}X</h5>
                        <h5 id="h55">$${price}</h5></div>
                    <div class="childcont22"><img id="btnimg" class="${obj.obj.category}" src="./assets/images/icon-remove-item.svg"></div>
                </div>
            </div>
        `
    })
    if(cart.length !== 0){
        cnt.innerHTML = ''
        cnt.innerHTML = `
        <div>
            <div class='cnt'>
                <div class="cnt1">
                    <p>Order Total</p>
                    <p>$${pr}</p>
                <div class="cont2">
                    <img src="./assets/images/icon-carbon-neutral.svg">
                    <h6>This is <strong> carbon-netural </strong> delivery</h6> 
                </div>
                <button id="buynow">Confrim Order</button>
            </div>
        </div>`
        cartres.innerHTML += cnt.innerHTML
        let buynow = document.getElementById('buynow')

        if(buynow){
            buynow.addEventListener('click', function(){
                alert('წარმატებით შეიძინეთ!')
                cart = [];
                cartres.innerHTML = ``
                nn2.style.display = 'flex'
                nn1.style.display = 'flex'
                pr = 0
            })}
    }else{
        cnt.innerHTML = ``
        cartres.innerHTML += cnt.innerHTML
    }
    let btnimg = document.querySelectorAll('#btnimg')
    btnimg.forEach(btn => {
        btn.addEventListener('click', function(){
            
            her.textContent = `Your Cart (${cart.length})`
            cart = cart.filter(x => x.obj.category !== btn.className)
            if(cart.length !== 0){
                nn2.style.display = 'none'
                nn1.style.display = 'none'
                pr = 0

            }else{
                nn2.style.display = 'flex'
                nn1.style.display = 'flex'
                pr = 0
            }
            cartt()
        })
    })
}
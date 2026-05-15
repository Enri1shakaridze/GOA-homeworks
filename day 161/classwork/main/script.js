const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let email = document.getElementById('email');
    let l2 = document.getElementById('l2');
    let cont = document.querySelector('.cont');
    let allCont = document.querySelector('.all-cont');
    l2.textContent = '';
    let x = true;
    email.style.border = '0.9px solid grey'
    if(!email.value.includes('@gmail.com')){
        l2.textContent = 'Valid Email required';
        l2.style.color = 'red';
        email.style.border = '1px solid red'
        x = false;
        return;
    }
    if(x){
        cont.style.display = 'none';
        allCont.id= 'dspn';
        const img = document.createElement('img');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const div = document.createElement('div');
        const button = document.createElement('button');
        button.textContent = 'Dismiss message';
        img.src = '../assets/images/icon-success.svg';
        h1.textContent = 'Thanks for subscribing!';
        p.textContent = 'A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription.';
        div.appendChild(img);
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(button);
        allCont.appendChild(div);
        button.id = 'marr';
        h1.id = 'marr';
        p.id = 'marr';
        allCont.id = 'dispfl'
        div.id = 'dispfl1'
        div.addEventListener('click', function(){
            div.style.display = 'none';
            cont.style.display = 'flex'
            allCont.id = 'flexx'
        })
        form.reset();
    }
})
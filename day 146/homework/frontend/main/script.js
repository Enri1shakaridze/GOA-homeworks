const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
let cont = document.querySelector('.cont');
let conteiner1 = document.querySelector('.conteiner1');
let conteiner2 = document.querySelector('.conteiner2');
let conteiner3 = document.querySelector('.conteiner3');
let conteiner4 = document.querySelector('.conteiner4');
let number = 0;

btn1.addEventListener('click', function(){
    number += 1;
});
btn2.addEventListener('click', function(){
    number = 0;
    number += 2;
});
btn3.addEventListener('click', function(){
    number = 0;
    number += 3;
});
btn4.addEventListener('click', function(){
    number = 0;
    number += 4;
});
btn5.addEventListener('click', function(){
    number = 0;
    number += 5;
});
btn6.addEventListener('click', function(){
    if(number === 0){
        alert('გთხოვთ დააკლიკეთ შეფასებას!')
    }else{
        cont.removeChild(conteiner1);
        cont.removeChild(conteiner2);
        cont.removeChild(conteiner3);
        cont.removeChild(conteiner4);
        let img = document.createElement('img');
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        cont.appendChild(img);
        cont.appendChild(div);
        cont.appendChild(h1);
        cont.appendChild(p);
        div.appendChild(p2);
        p2.textContent = `You selected ${number} out of 5`
        h1.textContent = "Thank you!";
        p.textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";
        img.src = '../images/illustration-thank-you.svg';
        cont.id = 'cont';
        p.style.maxWidth = '300px';
        p.style.textAlign = 'center';
        img.id = 'img1';
        p2.style.color = 'hsl(25, 97%, 53%)';
        div.id = 'div';
        p2.style.fontSize = '14px'
        h1.style.marginTop = '30px';
    }
})
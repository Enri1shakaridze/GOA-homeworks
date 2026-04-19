let namee = document.getElementById('name');
let lastname = document.getElementById('lastname');
let email = document.getElementById('email');
let General = document.querySelector('.General');
let Support = document.querySelector('.Support');
let message = document.getElementById('message');
let cont = document.querySelector('.cont')
let cx = document.getElementById('cx');
let submit = document.getElementById('submit');
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let br1 = document.getElementById('br1');
let br2 = document.getElementById('br2');
let br3 = document.getElementById('br3');
let br4 = document.getElementById('br4');
let p6 = document.getElementById('p6');
let im = '@gmail.com';
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let e = document.getElementById('e');
let x = false;
let y = false;
let body = document.querySelector('body')

General.addEventListener('click', function(){
    img1.src = "../assets/images/icon-radio-selected.svg"
    x = true;
    y = false;
    General.id = 'gen1'
    Support.id = 's1';
    img2.src = 'https://pngimg.com/d/circle_PNG23.png'
})

Support.addEventListener('click', function(){
    img2.src = "../assets/images/icon-radio-selected.svg"
    y = true;
    x = false;
    Support.id = 's2';
    General.id = 'gen2'
    img1.src = 'https://pngimg.com/d/circle_PNG23.png'
})
let n = false;
let sn = false;
let g = false;
let t = false;

cx.addEventListener('change', function(){
    p4.textContent = '';
});
submit.addEventListener('click', function(){
    // name, surename
    if(namee.value.length === 0 || lastname.value.length === 0){
        cont.removeChild(br1);
        p1.textContent = 'არ შეგივსიათ სახელი ან გვარი!'
    }else{
        p1.textContent = ''
        cont.appendChild(br1)
        n = true;
        sn = true;
    }
    // gmail
    if(!email.value.includes('@gmail.com')){
        p2.textContent = 'მეილი უნდა შეიცავდეს @gmail.com'
    }else{
        p2.textContent = ''
        namee.style.marginBottom = '15px'
        g = true;

    }
    // texatrea
    if(message.value.length === 0){
        p6.textContent = 'შეავსეთ ეს ველი!'
    }else{
        p6.textContent = '';
        t = true;
    }
    // General, Support
    if(x === false && y === false){
        p3.textContent = 'აირჩიეთ ერთერთი!'
    }else{
        p3.textContent = '';
    }
    if(!cx.checked){
        p4.textContent = 'მონიშნეთ!'
    }else{
        p4.textContent = '';
    }
    General.addEventListener('click', function(){
        p3.textContent = '';
    });

    Support.addEventListener('click', function(){
        p3.textContent = '';
    });
    if(n === true && sn === true && g === true && t === true){
        namee.value = ''; 
        lastname.value = ''; 
        email.value = '';
        message.value = '';
        General.style.marginBottom = '20px'
        Support.id = 's1';
        img2.src = 'https://pngimg.com/d/circle_PNG23.png'
        General.id = 'gen2'
        img1.src = 'https://pngimg.com/d/circle_PNG23.png'
        cx.checked = false;
        let div1 = document.createElement('div');
        div1.className = 'div1';
        body.appendChild(div1);
        let p = document.createElement('p');
        p.textContent = "Thanks for completing the form. We'll be in touch soon!";
        let picture = document.createElement('picture')
        img1.src = "https://www.clker.com/cliparts/D/p/l/O/9/I/check-white-hi.png";
        img1.style.width = '40px'
        let h4 = document.createElement('h4')
        h4.textContent = 'Message Sent!';
        h4.style.display = 'inline';
        p.style.fontSize = '13px'
        p.style.marginLeft = '2px'
        picture.style.marginLeft = '2px'
        picture.id = 'picture'
        div1.style.backgroundColor = 'hsl(187, 24%, 22%)'
        div1.appendChild(picture)
        div1.appendChild(h4)
        div1.appendChild(p)
    }
})
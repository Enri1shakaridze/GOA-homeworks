const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    let cardname11 = document.querySelector('#cardname');
    let cont2 = document.getElementsByClassName('cont2')[0];
    let cardnum11 = document.querySelector('#cardnum');
    let MM11 = document.querySelector('#MM');
    let YY11 = document.querySelector('#YY');
    let CVC11 = document.querySelector('#CVC');
    let cardname = document.getElementById('cardname').value;
    let cardnum = document.getElementById('cardnum').value;
    let MM = document.getElementById('MM').value;
    let YY = document.getElementById('YY').value;
    let CVC = document.getElementById('CVC').value;
    let cardnumChild = document.getElementById('cardnumChild');
    let cardnameChild = document.getElementById('cardnameChild');
    let MMYY = document.getElementById('MMYY');
    let CVC1 = document.getElementById('CVC1');
    let h2 = document.getElementById('h2');
    let namee = document.getElementById('namee');
    let age = document.getElementById('age');
    let p1 = document.getElementById('p1');
    cardnameChild.textContent = '';
    cardnumChild.textContent = '';
    MMYY.textContent = '';
    CVC1.textContent = '';
    let a1 = false;
    let a2 = false;
    let a3 = false;
    let a4 = false;
    let a5 = false;
    if(cardname === ''){
        cardnameChild.textContent = 'Pleace Enter Your Full Name';
        cardnameChild.className = 'redp';
        cardname11.className = 'redborder';
    }else if(!isNaN(cardname)){
        cardnameChild.textContent = 'Pleace Enter Letters only';
        cardnameChild.className = 'redp';
        cardname11.className = 'redborder';
    }else if(cardname.length <= 4){
        cardnameChild.textContent = 'Please enter more than 4 letters';
        cardnameChild.className = 'redp';
        cardname11.className = 'redborder';
    }else{
        cardname11.className = 'greyborder';
        a1 = true;
    }
    if(cardnum === ''){
        cardnumChild.textContent = 'Pleace Enter Your Card Number';
        cardnumChild.className = 'redp';
        cardnum11.className = 'redborder';
    }else if(isNaN(cardnum)){
        cardnumChild.textContent = 'Wrong format, Number Only';
        cardnumChild.className = 'redp';
        cardnum11.className = 'redborder';
    }else if(cardnum.length !== 16){
        cardnumChild.textContent = 'Wrong format, Enter Only 16 Letter';
        cardnumChild.className = 'redp';
        cardnum11.className = 'redborder';
    }else{
        cardnum11.className = 'greyborder';
        a2 = true;
    }
    if(MM === ''){
        MMYY.textContent = 'Cann`t be blanck';
        MMYY.className = 'redp';
        MM11.className = 'redborder';
    }else if(isNaN(MM)){
        MMYY.textContent = 'Cann`t be blanck';
        MMYY.className = 'redp';
        MM11.className = 'redborder';
    }else{
        MM11.className = 'greyborder';
        a3 = true;
    }
    if(YY === ''){
        MMYY.textContent = 'Cann`t be blanck';
        MMYY.className = 'redp';
        YY11.className = 'redborder';
    }else if(isNaN(YY)){
        MMYY.textContent = 'Cann`t be blanck';
        MMYY.className = 'redp';
        YY11.className = 'redborder';
    }else{
        YY11.className = 'greyborder';
        a4 = true;
    }
    if(CVC === ''){
        CVC1.textContent = 'Cann`t be blanck';
        CVC1.className = 'redp';
        CVC11.className = 'redborder';
    }else if(isNaN(CVC)){
        CVC1.textContent = 'Cann`t be blanck';
        CVC1.className = 'redp';
        CVC11.className = 'redborder';
    }else{
        CVC11.className = 'greyborder';
        a5 = true;
    }
    if(a1 === true && a2 === true && a3 === true && a4 === true && a5 === true){
        let res = '';
        for(let i = 0; i < cardnum.length; i++){
            if(i === 4 || i === 8 || i === 12){
                res += ' ';
                res += cardnum[i]
            }else{
                res += cardnum[i]
            }
        }
        h2.textContent = res;
        namee.textContent = cardname;
        age.textContent = `${MM}/${YY}`;
        p1.textContent = CVC;
        form.style.display = 'none';
        let pnew = document.createElement('p');
        let h1new = document.createElement('h1');
        let imgnew = document.createElement('img');
        let buttonnew = document.createElement('button');
        buttonnew.textContent = 'Continue'
        pnew.textContent = "We've added your card details";
        h1new.textContent = 'Thank you!';
        imgnew.src = '../images/icon-complete.svg';
        cont2.appendChild(imgnew);
        cont2.appendChild(h1new);
        cont2.appendChild(pnew);
        cont2.appendChild(buttonnew);
        cont2.id= 'cont22';
        buttonnew.addEventListener('click', function(){
            cont2.removeChild(imgnew);
            cont2.removeChild(h1new);
            cont2.removeChild(buttonnew);
            cont2.removeChild(pnew);
            form.style.display = 'flex';
            form.reset();
            h2.textContent = '0000 0000 0000 0000';
            namee.textContent = 'Joht Smith';
            p1.textContent = '000'
            age.textContent = '07/12'
            CVC11.className = '';
            YY11.className = '';
            MM11.className = '';
            cardnum11.className = '';
            cardname11.className = '';
        })
    }
})
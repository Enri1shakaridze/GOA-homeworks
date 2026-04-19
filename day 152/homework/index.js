let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function(e){
    e.preventDefault();
    let inp1 = document.getElementById('inp1').value;
    let inp2 = document.getElementById('inp2').value;
    let inp3 = document.getElementById('inp3').value;
    let inp4 = document.getElementById('inp4').value;
    let l1 = document.getElementById('l1');
    let l2 = document.getElementById('l2');
    let l3 = document.getElementById('l3');
    let a = document.getElementById('a');
    let l4 = document.getElementById('l4');
    let l5 = document.getElementById('l5');
    let gmail = '@gmail.com'
    if(inp1.length === 0){
        l1.textContent = 'შეიყვანეთ სახელი!'
    }else{
        l1.textContent = '';
    }
    if(inp2.length === 0){
        l2.textContent = 'შეიყვანეთ გვარი!'
    }else{
        l2.textContent = '';
    }
    if(!inp3.includes(gmail)){
        l3.textContent = 'ემაილი უნდა შეიცავდეს @gmail.com ს!'
    }else{
        l3.textContent = '';
    }
    if(inp4.length === 0){
        l4.textContent = 'შეიყვანეთ ტელეფონის ნომერი!'
    }else{
        l4.textContent = '';
    }
    localStorage.setItem('name', inp1);
    localStorage.setItem('surename', inp2);
    if(!inp1.length === 0 && !inp2.length === 0 && !inp3.length === 0 && !inp4.length === 0){
        btn1.style.marginTop = '40px';
    }
    if(inp1.length > 0 && inp2.length > 0 && inp3.includes(gmail) && inp4.length > 0){
        l5.textContent = 'წარმატებით დარეგისტრირდი!'
        setTimeout(() =>{
            window.location = './next.html'
        }, 500)
    }
})
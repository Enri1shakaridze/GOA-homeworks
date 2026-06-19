const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    
    e.preventDefault()
    const name = document.getElementById('name').value;
    const surename = document.getElementById('surename').value;
    const email = document.getElementById('email').value;
    let perror1 = document.getElementById('perror1');
    let perror2 = document.getElementById('perror2');
    let perror3 = document.getElementById('perror3');

    if(name === ''){
        perror1.textContent = 'შეიყვანეთ თქვენი სახელი!'
    }else{
        perror1.textContent = ''
    }
    if(surename === ''){
        perror2.textContent = 'შეიყვანეთ თქვენი გვარი!'
    }else{
        perror2.textContent = ''
    }
    if(!email.includes('@gmail.com')){
        perror3.textContent = 'მეილი უნდა შეიცავდეს @gmail.com-ს'
    }else{
        perror3.textContent = ''
    }
    if(email.includes('@gmail.com') && surename !== '' && name !== ''){
        perror1.style.color = 'green'
        perror1.textContent = 'წარმატებით გაიგზავნა!'
        setTimeout(() => {
            form.reset()
            perror1.textContent = ''
            perror1.style.color = 'red'
        }, 1500);
    }
})

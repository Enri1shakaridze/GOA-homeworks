
const form = document.querySelector('form');
const mail2 = ['@gmail.com'];
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const namee = document.getElementById('name').value;
    const pass = document.getElementById('Password').value;
    const mail = document.getElementById('mail').value;
    const com_pass = document.getElementById('com_pass').value;
    if(namee.length <= 5){
        p1.textContent = '• სახელი უნდა აღემატებოდეს 5 სიმბოლოს!';
        p1.style.color = 'red';
        p1.style.fontSize = '13px'
    }
    if(!mail.includes(mail2)){
        p2.textContent = '• მეილი @gmail.com-ს უნდა შეიცავდეს!';
        p2.style.color = 'red';
        p2.style.fontSize = '13px'
    }
    if(pass !== com_pass){
        p3.textContent = '• comfrim password უნდა უდრიდეს password ს!';
        p3.style.color = 'red';
        p3.style.fontSize = '13px'
        p4.textContent = '• comfrim password უნდა უდრიდეს password ს!';
        p4.style.color = 'red';
        p4.style.fontSize = '13px'
        
    }
    if(!mail.includes(mail2) && pass !== com_pass && namee.length <= 5){
        form.style.marginTop = '40px'

    }
    p.textContent = 'წარმატებით დარეგისტრირდით!';
    p.style.color = 'green'
    form.reset()
})


const form = document.querySelector('form');
const mail2 = ['@gmail.com'];
const p = document.getElementById('p1');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const namee = document.getElementById('name').value;
    const pass = document.getElementById('Password').value;
    const mail = document.getElementById('mail').value;
    const com_pass = document.getElementById('com_pass').value;
    if(namee.length <= 5){
        p.textContent = '• სახელი უნდა აღემატებოდეს 5 სიმბოლოს!';
        p.style.color = 'red';
        p.style.fontSize = '13px'
        return
    }else if(!mail.includes(mail2)){
        p.textContent = '• მეილი @gmail.com-ს უნდა შეიცავდეს!';
        p.style.color = 'red';
        p.style.fontSize = '13px'
        return
    }else if(pass !== com_pass){
        p.textContent = '• comfrim password უნდა უდრიდეს password ს!';
        p.style.color = 'red';
        p.style.fontSize = '13px'
        return
    }
    p.textContent = 'წარმატებით დარეგისტრირდით!';
    p.style.color = 'green'
    form.reset()
})

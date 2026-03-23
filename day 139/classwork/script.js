
const form = document.querySelector('form');
const mail2 = ['@gmail.com']

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const namee = document.getElementById('name').value;
    const pass = document.getElementById('Password').value;
    const mail = document.getElementById('mail').value;
    const com_pass = document.getElementById('com_pass').value;
    if(namee.length <= 5){
        alert('სახელი უნდა აღემატებოდეს 5 სიმბოლოს!')
        // e.preventDefault();
        return
    }else if(!mail.includes(mail2)){
        alert('მეილი @gmail.com-ს უნდა შეიცავდეს!')
        // e.preventDefault();
        return
    }else if(pass !== com_pass){
        alert('comfrim password უნდა უდრიდეს password ს!')
        // e.preventDefault();
        return
    }
    alert('წარმატებით დარეგისტრირდით!')
    form.reset()
})

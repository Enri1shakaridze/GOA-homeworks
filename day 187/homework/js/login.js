const form = document.querySelector('form');
const btn = document.querySelector('#btn');

let namet = false
let emailt = false
let passt = false
form.addEventListener('submit', function(e){
    e.preventDefault()
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let name2 = document.getElementById('name2');
    let password2 = document.getElementById('password2');
    let email2 = document.getElementById('email2');
    if(name.length === 0){
        name2.style.color = 'red'
        name2.textContent = 'Enter Your Name!'
        setTimeout(() => {
            name2.textContent = 'Username'
            name2.style.color = '#ffffff'
        }, 2000);
        namet = false
    }else if(!isNaN(name)){
        name2.style.color = 'red'
        name2.textContent = 'Enter Only letters!'
        setTimeout(() => {
            name2.textContent = 'Username'
            name2.style.color = '#ffffff'
        }, 2000);
        namet = false
    }else{
        namet = true
        name2.textContent = 'Username'
        name2.style.color = '#ffffff'
    }
    if(email.length === 0){
        email2.style.color = 'red'
        email2.textContent = 'Enter Your Email!'
        setTimeout(() => {
            name2.textContent = 'User Email'
            email2.style.color = '#ffffff'
        }, 2500);
        emailt = false
    }else if(!email.includes('@gmail.com')){
        email2.style.color = 'red'
        email2.textContent = 'Eamil Must includes @gmail.com!'
        setTimeout(() => {
            email2.textContent = 'User Email'
            email2.style.color = '#ffffff'
        }, 2500);
        emailt = false
    }else{
        emailt = true
        email2.textContent = 'User Email'
        email2.style.color = '#ffffff'
    }
    if(password.length <= 7){
        password2.style.color = 'red'
        password2.textContent = 'Enter Your Minumum 8 letters!'
        setTimeout(() => {
            password2.textContent = 'Password'
            password2.style.color = '#ffffff'
        }, 3000);
        passt = false
    }else{
        passt = true
        password2.textContent = 'Password'
        password2.style.color = '#ffffff'
    }
    if(namet && passt && emailt){
        let users = JSON.parse(localStorage.getItem('users')) || []
        let l = true
        users.forEach(el => {
            if(el.username === name && el.password === password && el.email === email){
                localStorage.setItem('logedin', JSON.stringify(true))
                l = false
                alert('წარმატებით შეხვედით აქაუნთზე!')
                localStorage.setItem('logedinuserinfo', JSON.stringify(el))
                return;
            }
        });
        if(l){
            alert('აქაუნთი არ მოიძებნა!')
            localStorage.setItem('logedin', JSON.stringify(false))
            localStorage.removeItem('logedinuserinfo')
            return
        }
        window.location = "../index.html"
    }
})

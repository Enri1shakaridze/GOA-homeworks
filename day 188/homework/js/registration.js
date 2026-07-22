const form = document.querySelector('form');
const btn = document.querySelector('#btn');
let users = JSON.parse(localStorage.getItem('users')) || []

let namet = false
let emailt = false
let passt = false
let passrt = false
let cxt = false
let cx = document.getElementById('cx2');
if(cx.checked){
    btn.style.backgroundColor = '#ff2e63'
    cxt = true
}else{
    btn.style.backgroundColor = '#4b5563'
    cxt = false
}
cx.addEventListener('click', function(){
    if(cx.checked){
        btn.style.backgroundColor = '#ff2e63'
        cxt = true

    }else{
        btn.style.backgroundColor = '#4b5563'
        cxt = false
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    let name = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let repeatpassword = document.getElementById('repeatpassword').value;
    let name2 = document.getElementById('name2');
    let password2 = document.getElementById('password2');
    let email2 = document.getElementById('email2');
    let repeatpassword2 = document.getElementById('repeatpassword2');
    cx = document.getElementById('cx2');
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
    if(password !== repeatpassword){
        repeatpassword2.style.color = 'red'
        repeatpassword2.textContent = 'Password Must match!'
        setTimeout(() => {
            repeatpassword2.textContent = 'Repeat Password'
            repeatpassword2.style.color = '#ffffff'
        }, 3500);
        passrt = false
    }else if(repeatpassword.length === 0){
        repeatpassword2.style.color = 'red'
        repeatpassword2.textContent = 'Enter Your Minumum 8 letters!'
        setTimeout(() => {
            repeatpassword2.textContent = 'Repeat Password'
            repeatpassword2.style.color = '#ffffff'
        }, 3500);
        passrt = false
    }else{
        passrt = true
        repeatpassword2.textContent = 'Repeat Password'
        repeatpassword2.style.color = '#ffffff'
    }
    if(cx.checked){
        users.forEach(obj =>{
            if(obj.email === email){
                alert('This email already taken')
                emailt = false
            }
        })
    }
    if(namet && passt && passrt && emailt && cxt){
        users = JSON.parse(localStorage.getItem('users')) || []
        users.push({
            "id": users.length,
            "username": name,
            "email": email,
            "password": password,
            "avatar": "./image/noprofile.png",
            "bio": "",
            "createdAt": new Date(),
            "favorites": [],
            "watchlist": [],
            "watched": [],
        })
        localStorage.setItem('users', JSON.stringify(users))
        form.reset()
        alert('წარმატებით დარეგისტრირდით!')
        window.location = "../html/login.html"
    }
})

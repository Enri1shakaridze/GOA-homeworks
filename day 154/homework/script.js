let name = document.getElementById('name');
let password = document.getElementById('password');
let email = document.getElementById('email');
let surename = document.getElementById('surename');
let name2 = document.getElementById('name2');
let password2 = document.getElementById('password2');
let email2 = document.getElementById('email2');
let surename2 = document.getElementById('surename2');

function local(){
    if(name.value === '' || surename.value === '' || email.value === '' || password.value === ''){
        alert('შეავსეთ ყველა ველი!');
        return;
    }
    localStorage.setItem('name', name.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('surename', surename.value);
}

name2.textContent = `Name: ${localStorage.getItem('name') || 'Guest'}`;
password2.textContent = `Password: ${localStorage.getItem('password') || '***'}`;
surename2.textContent = `Surename: ${localStorage.getItem('surename') || 'Guestadze'}`;
email2.textContent = `Email: ${localStorage.getItem('email') || 'Guest@gmail.com'}`;
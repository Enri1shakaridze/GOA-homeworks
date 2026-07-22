
const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let neww = document.getElementById('new').value
    let email2 = document.getElementById('email2')
    let password2 = document.getElementById('password2')
    let neww2 = document.getElementById('new2')
    let user = JSON.parse(localStorage.getItem('logedinuserinfo'))
    if(email.length === 0){
        email2.style.color = 'red'
        email2.textContent = 'Enter Your Email!'
        setTimeout(() => {
            email2.style.color = 'white'
        }, 1500);
    }else if(user.email !== email){
        email2.style.color = 'red'
        email2.textContent = 'Invalid Email!'
        setTimeout(() => {
            email2.style.color = 'white'
        }, 1500);
    }
    if(password.length === 0){
        password2.style.color = 'red'
        password2.textContent = 'Enter Your Password!'
        setTimeout(() => {
            password2.style.color = 'white'
        }, 2000);
    }else if(password !== user.password){
        password2.style.color = 'red'
        password2.textContent = 'Invalid Password!'
        setTimeout(() => {
            password2.style.color = 'white'
        }, 2000);
    }
    if(neww.length < 7){
        neww2.style.color = 'red'
        neww2.textContent = 'Enter Minimum 8 letters!'
        setTimeout(() => {
            neww2.style.color = 'white'
        }, 2500);
    }
    if(email === user.email && password === user.password && neww.length >= 8){
        user.password = neww
        let allus = JSON.parse(localStorage.getItem('users'))
        let index = 0
        allus.forEach((el, indexx) => {
            console.log(el)
            if(el.email === user.email){
                index = indexx
            }
        });
        allus[index] = user
        localStorage.setItem('users', JSON.stringify(allus))
        localStorage.setItem('logedinuserinfo', JSON.stringify(user))
        alert('წარმატებით შეიცვალა პაროლი!')
        form.reset()

    }
})
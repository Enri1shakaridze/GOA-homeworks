let clickk2 = document.querySelectorAll('.clickk')
clickk2.forEach(btn => {
    btn.addEventListener('click', function(){
        clickk2.forEach(btn2 => {
            if(btn.dataset.mode === 'logout'){
                let login = JSON.parse(localStorage.getItem('logedin'))
                login = false
                localStorage.setItem('logedin', JSON.stringify(login))
                localStorage.removeItem('logedinuserinfo')
                window.location = "../index.html"
            }
        })
    })
})
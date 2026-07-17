let logged = JSON.parse(localStorage.getItem('logedin'))

function loggedin(){
    if(logged){
        let loggeduser = document.querySelector('#logged')
        loggeduser.href = './html/logedacc.html'
        let profileimg = document.querySelector('#profileimg')
        let loggeduserinfo = JSON.parse(localStorage.getItem('logedinuserinfo'))
        profileimg.src = `${loggeduserinfo.avatar}`
    }else{
        let loggeduser = document.querySelector('#logged')
        loggeduser.href = './html/login.html'
    }
}
loggedin()
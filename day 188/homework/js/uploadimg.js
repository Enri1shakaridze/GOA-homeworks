
const btn = document.getElementById("btn");
let img = document.getElementById("br50");
let img2 = document.getElementById("profileimg");
let nameuser = document.getElementById('nameuser')
let em = document.getElementById('em')
let dat = document.getElementById('dat')
console.log(nameuser)

btn.addEventListener('click', function(){
    let input = document.getElementById("avatar");
    if(input.value.length === 0){
        alert('შეიყვანეთ URL!')
    }else{
        img.src = input.value
        img2.src = input.value
        let userinfo = JSON.parse(localStorage.getItem('logedinuserinfo'))
        userinfo.avatar = input.value
        localStorage.setItem('logedinuserinfo', JSON.stringify(userinfo))
        input.value = ''
    }
})

function render(){
    let logedin = JSON.parse(localStorage.getItem('logedin'))
    if(logedin){

        let userinfo = JSON.parse(localStorage.getItem('logedinuserinfo'))
        if(userinfo.avatar === './image/noprofile.png'){
            img.src = "." + userinfo.avatar
            img2.src = "." + userinfo.avatar
        }else{
            img.src = userinfo.avatar
            img2.src = userinfo.avatar
        }
        nameuser.textContent = userinfo.username
        em.textContent = userinfo.email
        dat.textContent = userinfo.createdAt
    }
}
render()
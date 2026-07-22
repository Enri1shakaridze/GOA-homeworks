let profileimg = document.querySelector('#profileimg')
let useer = JSON.parse(localStorage.getItem('logedinuserinfo'))
profileimg.src = '.'+ useer.avatar
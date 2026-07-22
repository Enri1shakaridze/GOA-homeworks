import data from "./data.json" with {type: 'json'};
let favorite = document.querySelectorAll('.favorite');

favorite.forEach(x => {
    x.addEventListener('click', function(){
        let logedin = JSON.parse(localStorage.getItem('logedin'));
        if(logedin){
            let logedinuserinfo = JSON.parse(localStorage.getItem('logedinuserinfo'));
            data.forEach(obj => {
                if(obj.overview === x.id){
                    if(!logedinuserinfo.watchlist.filter(q => q.overview === obj.overview)[0]) {
                        logedinuserinfo.watchlist.push(obj);
                    }else {
                        logedinuserinfo.watchlist = logedinuserinfo.watchlist.filter(q => q.overview !== obj.overview)
                    }
                    localStorage.setItem('logedinuserinfo', JSON.stringify(logedinuserinfo))
                    render()
                }
            })
        }else{
            alert('თქვენ არ ხართ დარეგისტრირებული!')
        }
    })
})

function render(){
    let logedin = JSON.parse(localStorage.getItem('logedin'));
    if(logedin){
        let res = []
        let logedinuserinfo = JSON.parse(localStorage.getItem('logedinuserinfo'));
        console.log(logedinuserinfo.watchlist)
        logedinuserinfo.watchlist.filter(z => {
            res.push(z.overview)
        })
        console.log(res)
        favorite.forEach(btn => {
            let fv = res.filter(b => b === btn.id)[0]
            if(fv){
                btn.lastElementChild.src = './image/add.png'
                btn.lastElementChild.style.width = '20px'
            }else{
                btn.lastElementChild.src = './image/nowatch.png'
                btn.lastElementChild.style.width = '30px'
            }
        })
        let users = JSON.parse(localStorage.getItem('users'));
        console.log(users)
        for (let index = 0; index < users.length; index++) {
            console.log(logedinuserinfo.email)
            console.log(users[index].email)
            if (users[index].email === logedinuserinfo.email) {
                users[index] = logedinuserinfo;
                console.log("FOUND");
                localStorage.setItem('users', JSON.stringify(users));
                break;
            }
        }
        
}
}
render()
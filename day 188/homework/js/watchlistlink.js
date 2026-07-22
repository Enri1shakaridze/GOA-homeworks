let userwatchlist = document.querySelector('.userwatchlist')
userwatchlist.style.display = 'flex'
userwatchlist.style.width = '95%'
function getwatch() {
    let user = JSON.parse(localStorage.getItem('logedinuserinfo'))
    let html = ''
    user.watchlist.forEach(obj => {
        let objinfo = [...obj.ganres].join(', ')
        html += `
            <div class="movie-card">
                <div>
                    <div class="movie-img">
                        <img class="imagemoviemain" src="${obj.imagebig}" alt="${obj.imagebig}">
                        <button id="${obj.overview}" class="favorite">
                            <img src="../image/add.png" alt="watchlist">
                        </button>

                        <div class="rating">
                            ⭐ ${obj.vote_average.toFixed(1)}
                        </div>
                    </div>

                    <h3>${obj.title}</h3>

                    <div class="movie-info">
                        <span>${obj.date.slice(0, 4)} • ${objinfo}</span>
                    </div>
                </div>
                <div id='${obj.popularity}'>
                    <a id="watchnow" class="watch" href=""><img width="30px" src="../image/white-play-icon-png-6.png" alt="watchnow">Watch Now</a>
                </div>
            </div>`;
        })
        userwatchlist.innerHTML = html
        let favorite = document.querySelectorAll('.favorite')
        favorite.forEach(x => {
            x.addEventListener('click', function () {
            let userwat = JSON.parse(localStorage.getItem('logedinuserinfo'))
            userwat.watchlist = userwat.watchlist.filter(z => z.overview !== x.id)
            let users = JSON.parse(localStorage.getItem('users'))
            let indexx = 0
            users.forEach((x, index) => {
                if(x.email === userwat.email){
                    indexx = index
                }
            })
            users[indexx] = userwat
            localStorage.setItem('users', JSON.stringify(users))
            localStorage.setItem('logedinuserinfo', JSON.stringify(userwat))
            getwatch()
        })
    })
    let watch = document.querySelectorAll('.watch')
    watch.forEach(x => {
        x.addEventListener('click', function(e){
            e.preventDefault()
            let par = Number(x.parentElement.id)
            console.log(par)
            let userwatc = JSON.parse(localStorage.getItem('logedinuserinfo'))
            userwatc.watchlist.forEach(obj => {
                if(obj.popularity === par){
                    localStorage.setItem('onemove', JSON.stringify(obj))
                    window.location = './onemovie.html'
                }
            })
        })
    })
    if (user.watchlist.length === 0) {
        let div = document.createElement('div')
        let div2 = document.createElement('div')

        let img = document.createElement('img')
        let p = document.createElement('p')
        p.textContent = 'Your watchlist is empty.'
        img.src = 'https://www.pngkey.com/png/full/0-8392_white-no-symbol-clip-art-at-clipart-library.png'
        div.appendChild(img)
        div.appendChild(p)
        div2.appendChild(div)
        div.id = 'idfordiv'
        userwatchlist.innerHTML = div2.innerHTML
    }
    
}
getwatch()
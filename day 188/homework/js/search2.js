let ress = JSON.parse(localStorage.getItem('searchres'))
let resultt= document.querySelector('.resultt')
console.log(ress)

let html = ``
if(ress.length === 0){
    let img = document.createElement('img')
    let p = document.createElement('p')
    let div = document.createElement('div')
    let div2 = document.createElement('div')
    img.src = 'https://www.pngkey.com/png/full/0-8392_white-no-symbol-clip-art-at-clipart-library.png'
    p.textContent = 'Your search is empty.'
    div.appendChild(img)
    img.style.width = '350px'
    p.style.color = 'white'

    div.appendChild(p)
    div2.appendChild(div)
    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'
    div.style.gap = '20px'
    div.style.marginTop = '20px'
    div.style.flexDirection = 'column'
    resultt.innerHTML = div2.innerHTML
}
ress.forEach(obj => {
    let objinfo = [...obj.ganres].join(', ')
    html  += `
        <div class="movie-card">
            <div>
                <div class="movie-img">
                    <img class="imagemoviemain" src="${obj.imagebig}" alt="${obj.imagebig}">
                    <button id="${obj.overview}" class="favorite">
                        <img src="../image/nowatch.png" alt="watchlist">
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
    resultt.innerHTML = html
});
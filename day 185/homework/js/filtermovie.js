import data from "./data.json" with {type: 'json'};

const selectgenres = document.querySelector('.selectgenres');
const selectsortby = document.querySelector('.selectsortby');
const optionsortby = document.querySelectorAll('.optionsortby');
const optiongenres = document.querySelectorAll('.optiongenres');
let resgenres = localStorage.getItem('genres') || optiongenres[0].value
let ressortby = localStorage.getItem('sortby') || optionsortby[0].value
let allmovies = document.querySelector('.allmovies')
let clearfilter = document.querySelector('.clearfilter')
let res = []


selectgenres.addEventListener("change", () => {
    resgenres = selectgenres.value;
    localStorage.setItem("genres", resgenres);
    rendermovie()
});

selectsortby.addEventListener("change", () => {
    ressortby = selectsortby.value;
    localStorage.setItem("sortby", ressortby);
    rendermovie()
});


async function movies(){
    res = []
    if(resgenres === 'All Genres' && ressortby === 'All'){
        res = data
    }else if(resgenres === 'All Genres' && ressortby === 'Popular'){
        let data2res = [...data].filter(x => {
            return x.popularity >= 100
        })
        res = data2res
    }else if(ressortby === 'Popular'){
        let data2res = [...data].filter(x => {
            return x.ganres.includes(resgenres) && x.popularity >= 100
        })
        res = data2res
    }else if(resgenres !== 'All Genres' && ressortby === 'All'){
        let data2res = [...data].filter(x => {
            return x.ganres.includes(resgenres)
        })
        res = data2res
    }else if(ressortby === 'newest' && resgenres === 'All Genres'){
        let data2res = [...data].sort((a, b)=> {
            return Number(a.date.slice(0, 4)) - Number(b.date.slice(0, 4))
        })
        res = data2res
    }else if(ressortby === 'newest'){
        let data2res = [...data].sort((a, b)=> {
            return Number(a.date.slice(0, 4)) - Number(b.date.slice(0, 4))
        })
        data2res = data2res.filter(x => {
            return x.ganres.includes(resgenres)
        })
        res = data2res
    }else if(ressortby === 'oldest' && resgenres === 'All Genres'){
        let data2res = [...data].sort((a, b)=> {
            return Number(b.date.slice(0, 4)) - Number(a.date.slice(0, 4))
        })
        res = data2res
    }else if(ressortby === 'oldest'){
        let data2res = [...data].sort((a, b)=> {
            return Number(b.date.slice(0, 4)) - Number(a.date.slice(0, 4))
        })
        data2res = data2res.filter(x => {
            return x.ganres.includes(resgenres)
        })
        res = data2res
    }else if(ressortby === 'high' && resgenres === 'All Genres'){
        let data2res = [...data].filter((a)=> {
            return a.vote_average >= 8
        })
        res = data2res
    }else if(ressortby === 'high'){
        let data2res = [...data].filter((a)=> {
            return a.vote_average >= 8
        })
        data2res = data2res.filter(x => {
            return x.ganres.includes(resgenres)
        })
        res = data2res
    }else if(ressortby === 'Low' && resgenres === 'All Genres'){
        let data2res = [...data].filter((a)=> {
            return a.vote_average <= 8
        })
        res = data2res
    }else if(ressortby === 'Low'){
        let data2res = [...data].filter((a)=> {
            return a.vote_average <= 8
        })
        data2res = data2res.filter(x => {
            return x.ganres.includes(resgenres)
        })
        res = data2res
    }
}
movies()

clearfilter.addEventListener('click', function(){
    selectgenres.value = 'All Genres'
    selectsortby.value = 'All'
    resgenres = selectgenres.value;
    ressortby = selectsortby.value;
    localStorage.setItem("sortby", selectsortby.value);
    localStorage.setItem("genres", selectgenres.value);
    rendermovie()
})

function rendermovie(){
    let html = ``
    movies()
    res.forEach(obj => {
        let objinfo = [...obj.ganres].join(', ')
        html  += `
            <div class="movie-card">
                <div>
                    <div class="movie-img">
                        <img class="imagemoviemain" src="${obj.imagebig}">
                        <button class="favorite">
                            <img src="./image/nowatch.png">
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
                <div>
                    <a id="watchnow" class="watch" href=""><img width="30px" src="./image/white-play-icon-png-6.png" alt="">Watch Now</a>
                </div>
            </div>`;
    })
    allmovies.innerHTML = html
}
rendermovie()
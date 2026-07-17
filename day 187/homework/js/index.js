import data from "./data.json" with { type: "json" }

let toprated = []

function toptratedmovies(){
    data.forEach(obj => {
        if(obj.vote_average >= 8.6){
            toprated.push(obj)
        }
    })
    console.log(toprated)
}
toptratedmovies()




let index = localStorage.getItem('index') || 0
index = Number(index)
let date = document.getElementById('date')
let rate = document.getElementById('rate')
let quality = document.getElementById('quality')
let title = document.getElementById('title')
let author = document.getElementById('author')
let infop = document.getElementById('infop')
let article1 = document.querySelector('#article1')
let watch = document.getElementById('watch')


function topratedfimls(){
    date.textContent = `${toprated[index].date}`
    rate.textContent = `⭐ ${toprated[index].vote_average.toFixed(2)}`
    quality.textContent = `${toprated[index].size}p`
    title.textContent = `${toprated[index].name}`
    author.textContent = `Author: ${toprated[index].authorName}`
    infop.textContent = `${toprated[index].overview}`
    article1.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,1), transparent), url(${toprated[index].imagesmoll})`
}



topratedfimls()


const next = document.querySelector('.next')
const prew = document.querySelector('.prew')

next.addEventListener('click', function(){
    if(index === toprated.length - 1){
        index = 0
        localStorage.setItem('index', index)
        article1.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,1), transparent), url(${toprated[index].imagesmoll})`
        topratedfimls()
    }else{
        index++
        localStorage.setItem('index', index)
        article1.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,1), transparent), url(${toprated[index].imagesmoll})`
        topratedfimls()
    }
})
prew.addEventListener('click', function(){
    if(index === 0){
        index = toprated.length - 1
        localStorage.setItem('index', index)
        article1.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,1), transparent), url(${toprated[index].imagesmoll})`
        topratedfimls()
    }else{
        index--
        localStorage.setItem('index', index)
        article1.style.backgroundImage = `linear-gradient(to right, rgba(0,0,0,1), transparent), url(${toprated[index].imagesmoll})`
        topratedfimls()
    }
})
watch.addEventListener('click', function(e){
    e.preventDefault()
    console.log(toprated[index])
    localStorage.setItem('onemove', JSON.stringify(toprated[index]))
    window.location = './html/onemovie.html'
})
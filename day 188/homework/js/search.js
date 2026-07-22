import data from "./data.json" with { type: "json" }
let searchim = document.querySelector('.searchim')
let res = []

searchim.addEventListener('click', function(){
    const search = document.getElementById('search')
    let value = search.value.toLowerCase()
    data.forEach(obj => {
        if(obj.name.toLowerCase().includes(value) || obj.title.toLowerCase().includes(value)){
            res.push(obj)
        }
    })
    setTimeout(() => {
        
        console.log(res)
    }, 10);

    localStorage.setItem('searchres', JSON.stringify(res))
    window.location = './html/search.html'
})
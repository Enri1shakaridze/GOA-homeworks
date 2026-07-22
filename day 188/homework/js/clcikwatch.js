import data from "./data.json" with {type: 'json'};
let watchf = document.querySelectorAll('.watch')

watchf.forEach(btn => {
    btn.addEventListener('click', function(e){
        e.preventDefault()
        let id = btn.parentElement.id
        let f = data.filter(obj => obj.popularity === Number(id))
        localStorage.setItem('onemove', JSON.stringify(f[0]))
        window.location = './html/onemovie.html'
    })
})
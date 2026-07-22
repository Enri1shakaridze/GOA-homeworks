let labelres = document.querySelector('.spanl');
let div = document.createElement('div');
let body = document.querySelector('body')
body.appendChild(div)
div.id = 'response'
div.style.display = 'none'
let div2 = document.createElement('div');

div2.innerHTML = `
    <h1>Cineverse</h1>
    <nav id='navf'>
        <a href="./index.html">Home</a>
        <a href="#article2">Movie</a>
        <a href="./html/watchlist.html">Watchlist</a>
        <a href="./html/logedacc.html">My Account</a>
    </nav>
    `

console.log(div)
labelres.addEventListener('click', function(){
    if(div.style.display === 'none'){
        div.style.display = 'block'
        div.className = 'animation'
        div.appendChild(div2)
    }else{
        div.className = 'remove-animation'
        setTimeout(() => {
            
            div.style.display = 'none'
        }, 500);
    }
})
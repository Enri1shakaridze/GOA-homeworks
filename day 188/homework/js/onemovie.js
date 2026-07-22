
const obj = JSON.parse(localStorage.getItem('onemove'))
const trailer = document.getElementById("movieTrailer");
const linear = document.querySelector(".linear");
const lenguage = document.getElementById('lenguage')

trailer.src = obj.video;
console.log(obj)
linear.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,1), transparent), url(${obj.imagebig})`
lenguage.textContent = `${obj.lenguage}`

const yearres = document.getElementById('yearres')
const description = document.getElementById('descriptionmain')
const countryres = document.getElementById('countryres')
const ganresyres = document.getElementById('ganresres')
const ratee = document.getElementById('ratee')
const titlee = document.getElementById('titlee')
yearres.textContent = obj.date
description.textContent = obj.overview
countryres.textContent = obj.country
ganresyres.textContent = obj.ganres.join(', ')
ratee.textContent = '⭐ ' + obj.vote_average.toFixed(2)
titlee.textContent = obj.title

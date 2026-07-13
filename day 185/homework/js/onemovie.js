
const obj = JSON.parse(localStorage.getItem('onemove'))
const trailer = document.getElementById("movieTrailer");
const linear = document.querySelector(".linear");
const lenguage = document.getElementById('lenguage')

trailer.src = obj.video;
console.log(obj)
linear.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,1), transparent), url(${obj.imagebig})`
lenguage.textContent = `${obj.lenguage}`
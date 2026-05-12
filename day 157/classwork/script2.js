let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let h1 = document.getElementById('h1');

let num = localStorage.getItem('num') || 0;
h1.textContent = num
minus.addEventListener('click', function(){
    num--
    localStorage.setItem('num', num) || 0;
    h1.textContent = num
})

plus.addEventListener('click', function(){
    num++
    localStorage.setItem('num', num) || 0;
    h1.textContent = num
})
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let num = localStorage.getItem('num') || 0
let h1 = document.getElementById('h1');
h1.textContent = `${num}`

minus.addEventListener('click', function(){
    num--;
    h1.textContent = `${num}`
    localStorage.setItem('num', num)
    color();

})
plus.addEventListener('click', function(){
    num++;
    h1.textContent = `${num}`
    localStorage.setItem('num', num)
    color();

})
color();
function color(){
    if(num > 0){
        document.body.style.backgroundColor = 'green'
    }else if(num < 0){
        document.body.style.backgroundColor = 'red'
    }else{
        document.body.style.backgroundColor = 'blue'
    }
}
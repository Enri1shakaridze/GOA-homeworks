let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let Reset = document.getElementById('Reset');
let num = localStorage.getItem('num') || 0
let h1 = document.getElementById('h1');
h1.textContent = `${num}⁰C`

minus.addEventListener('click', function(){
    num--;
    h1.textContent = `${num}⁰C`
    localStorage.setItem('num', num)
    color();

})
plus.addEventListener('click', function(){
    num++;
    h1.textContent = `${num}⁰C`
    localStorage.setItem('num', num)
    color();
})
Reset.addEventListener('click', function(){
    num = 20;
    h1.textContent = `${num}⁰C`
    localStorage.setItem('num', num)
    color();

})
color();
function color(){
    if(num > 30){
        document.body.style.backgroundColor = 'blueviolet'
    }else if(num >= 10 && num <= 30){
        document.body.style.backgroundColor = 'green'
    }else{
        document.body.style.backgroundColor = 'blue'
    }
}
let dark = document.getElementById('dark');
let light = document.getElementById('light');

dark.addEventListener('click', function(){
    document.body.style.backgroundColor = 'white'
    localStorage.setItem('color', 'white')
})
light.addEventListener('click', function(){
    document.body.style.backgroundColor = 'black'
    localStorage.setItem('color', 'black')
})
document.body.style.backgroundColor = `${localStorage.getItem('color') || 'white'}`

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const img = document.getElementById('img')
const h1 = document.getElementById('h1')

let pictures = [
    'https://assets.manutd.com/AssetPicker/images/0/0/10/126/687707/Legends-Profile_Cristiano-Ronaldo1523460877263.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZyNejtqu-h9t9LRlUGMc3TU73lYCkO16hoA&s',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Cristiano_Ronaldo_WC2022_-_02.jpg/250px-Cristiano_Ronaldo_WC2022_-_02.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PucI0ExTfOy-mLKcYJMyV_V8632oVV6nWw&s'
]

let color = ['grey', 'red', 'blue', 'black', 'white']
let color2 = ['yelow', 'blue', 'red', 'white', 'black']

let i = 0


btn1.addEventListener('click', () => {
    i ++;
    if(i >= pictures.length){
        i = 0
    }
    img.src = pictures[i]
    img.style.width = '200px'
    img.style.width = '200px'
    img.style.height = '200px'
    document.body.style.backgroundColor = color[i]
    h1.style.color = color2[i]
    img.style.width = '190px'
    btn1.style.sclae = '1.1'
    h1.style.scale = '0.7'

    img.style.border = '3px solid blue'
})
btn2.addEventListener('click', () => {
    i --;
    if(i < 0){
        i = pictures.length - 1
    }
    h1.style.scale = '0.8'
    img.src = pictures[i]
    img.style.width = '200px'
    img.style.height = '200px'
    document.body.style.backgroundColor = color[i]
    img.style.width = '210px'
    h1.style.color = color2[i]

    btn1.style.sclae = '0.9'
    img.style.border = '3px solid red'
})

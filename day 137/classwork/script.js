const btn1 = document.getElementById('btn<');
const btn2 = document.getElementById('btn>');
const img = document.getElementById('img');

let pictures = [
    'https://m.media-amazon.com/images/I/8103z+hFgwL._AC_UF894,1000_QL80_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVREZIcllalcEoSn-gqd7ILtiMLwZlJXrV-w&s',
    'https://resizing.flixster.com/mCpcS_W_BJy5ivgYTqdVPSjhvos=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7894205_b_v8_aa.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTVskJCfDxEPdXlKgCE9WpxYjVXlySGqK9g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmmypGTC1I1qGTTY-qU0a_d7Mqs5cVHaWIg&s'
]

let x = 0;

function next() {
    x++;
    if(x >= pictures.length){
        x = 0;
    }

    img.src = pictures[x]
}


function prew(){
    x--;
    if(x < 0){
        x = pictures.length -1
    }

    img.src = pictures[x]
}

btn1.addEventListener('click', next)
btn2.addEventListener('click', prew)
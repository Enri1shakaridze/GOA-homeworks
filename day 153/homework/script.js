class Booklibrary{
    constructor(container){
        this.container = container;
    }
    newbook(book, author){
        if(book === '' || author === ''){
            alert('შეავსეთ ველები!')
            return;
        }
        const bookObj = {book,author};
        this.contDiv(bookObj);
    }
    contDiv(obj){
        const div = document.createElement('div');
        div.innerHTML = `
        <p>${obj.book}</p>
        <p>${obj.author}</p>
        `
        div.id = 'newdiv'
        this.container.appendChild(div);
    }
}
const form1 = document.querySelector('form');
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');

const cont2 = document.querySelector('.cont2');
const b = new Booklibrary(cont2)
form1.addEventListener('submit', (e) => {
    e.preventDefault();
    b.newbook(inp1.value, inp2.value);
    form1.reset();
})
const cont2 = document.querySelector('.cont2');
const sbt = document.getElementById('sbt');


class Booklibrary{
    constructor(name, author){
        this.name = name;
        this.author = author;
    }
    getdiv(){
        if(this.name === '' || this.author === ''){
            alert('სეავსეთ ველები!')
            return;
        }
        let div = document.createElement('div');
        let nameBook = document.createElement('p');
        nameBook.textContent = this.name;
        let AuthorBook = document.createElement('p');
        AuthorBook.textContent = this.author;
        div.appendChild(nameBook);
        div.appendChild(AuthorBook);
        div.id = 'newdiv'
        cont2.appendChild(div);
    }
}


sbt.addEventListener('click', function(){
    const inp1 = document.getElementById('inp1').value;
    const inp2 = document.getElementById('inp2').value;
    
    let book1 = new Booklibrary(inp1, inp2);
    book1.getdiv();
    inp1 = '';
    inp2 = '';
});
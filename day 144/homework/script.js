const btn = document.getElementById('btn1');
let height = 250;

btn.addEventListener('click', function(){
    let input = document.getElementById('inp').value;
    const li = document.createElement('li');

    const span = document.createElement('span');
    const ul = document.querySelector('ul');
    let edit = document.createElement('button');
    edit.className = 'edit';
    edit.textContent = 'Edit';


    const btn2 = document.createElement('button');
    btn2.textContent = 'Remove';
    btn2.className = 'button22';

    span.textContent = input;
    li.appendChild(span);
    li.appendChild(edit);
    ul.appendChild(li);
    li.appendChild(btn2);

    // cont height + 50
    const cont = document.querySelector('.cont');
    height += 50;
    cont.style.height = `${height}px`; 

    // remove
    btn2.addEventListener('click', function(){
        ul.removeChild(li);
        // cont height - 50
        height -= 50;
        cont.style.height = `${height}px`; 
    });

    edit.addEventListener('click', function(){
        let input3 = prompt('Enter task: ');
        if(input3 === '' || input3 === ' '){
            span.textContent = input;
        }else{
            span.textContent = input3.trim();
        }
    });

});


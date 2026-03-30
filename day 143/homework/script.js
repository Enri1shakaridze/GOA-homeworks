const btn = document.getElementById('btn1');
let height = 250;

btn.addEventListener('click', function(){
    const input = document.getElementById('inp').value;
    const li = document.createElement('li');

    const span = document.createElement('span');
    const ul = document.querySelector('ul');
    const btn2 = document.createElement('button');
    btn2.textContent = 'Remove';
    btn2.style.height = '30px';
    btn2.style.width = '60px';
    btn2.style.border = 'none';
    btn2.style.borderRadius = '5px';
    btn2.style.backgroundColor = '#ff0000';
    span.textContent = input;
    li.appendChild(span);
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
    input = "";
});


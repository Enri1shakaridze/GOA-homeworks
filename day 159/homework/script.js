
let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let array = JSON.parse(localStorage.getItem('arrayy')) || [];
    let name = document.getElementById('name').value;
    let surename = document.getElementById('surename').value;
    let email = document.getElementById('email').value;
    let x = false
    for(let i = 0; i< array.length; i++){
        if(array[i].name === name && array[i].surename === surename && array[i].email === email){
            x = true
        }
    }
    if (name === '' && surename === '' && email === '') {
        alert('შეავსეთ ველები!');
        return;
    } else {
        if (x) {
            alert('ესეთი მომხმარებელი უკვე არსებობს!');
        } else {
            let uData = { name, surename, email }
            localStorage.setItem(Date.now(), JSON.stringify(uData));
            array.push(uData);
            localStorage.setItem('arrayy', JSON.stringify(array));
            setTimeout(() => {
                alert('წარმატებით დარეგისტრირდით')
            }, 500);
            form.reset();
        }
    }
})

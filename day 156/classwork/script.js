
let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let array = JSON.parse(localStorage.getItem('arrayy')) || [];
    let name = document.getElementById('name').value;
    let surename = document.getElementById('surename').value;
    let email = document.getElementById('email').value;
    if (name === '' && surename === '' && email === '') {
        return;
    } else {
        if (array.includes(email)) {
            alert('ესეთი მეილი უკვე არსებობს!');
        } else {
            array.push(email);
            localStorage.setItem('arrayy', JSON.stringify(array));
            let uData = { name, surename, email }
            localStorage.setItem(Date.now(), JSON.stringify(uData));
            form.reset();
        }
    }
})

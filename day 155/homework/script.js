// localStorage არის ესეროვთქვათ ყუთი სადაც ვინახავთ მონაცემებს დარეფრეშებისას კი არ მოიშლება, არც ქრომიდან გამოსვლისას ის ინახავს ამ ყველა მონაცემს

let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault;
    let name = document.getElementById('name').value;
    let surename = document.getElementById('surename').value;
    let email = document.getElementById('email').value;
    let uData = {name,surename,email}
    localStorage.setItem(name, JSON.stringify(uData))
})

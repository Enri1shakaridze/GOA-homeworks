// Date ობიექტის, setInterval-ის და clearInterval-ის გამოყენებით შექმენით პროგრამა, რომელიც ყოველ 2 წამში საიტზე ვიზუალურად გამოიტანს ამჟამინდელ თარიღს (წამებში, როგორც გაკვეძთილზე გავაკეთეთ), Interval-ი უნდა გაჩერდეთ 8 წამის შემდეგ.
let cont = document.querySelector('.cont');


let myy = setInterval(getdate, 2000)

function getdate(){
    let date = Date.now()
    let p = document.createElement('p');
    p.textContent = date;
    cont.appendChild(p);
}
getdate()

function stop(){
    clearInterval(myy);
}

setTimeout(stop, 8000);
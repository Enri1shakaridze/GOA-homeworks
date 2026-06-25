import Data from "../data.json" with { type: "json"} 

let buttons = document.querySelectorAll('button');
let container2 = document.querySelector('.container2');

let mode = 'weekly'


const renderCards = () => {
    container2.innerHTML = "";

    Data.forEach(obj => {
        container2.innerHTML += `
            <h1>${obj.title}</h1>
            <h1>${obj.timeframes[mode].current}</h1>
            <h1>${obj.timeframes[mode].previous}</h1>
        `;
    });
};


buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        mode = btn.dataset.mode
        console.log(mode)
        renderCards()
    })
})

renderCards()
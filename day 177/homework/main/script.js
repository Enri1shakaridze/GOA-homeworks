import Data from "../data.json" with { type: "json"} 

let buttons = document.querySelectorAll('button');
let container2 = document.querySelector('.container2');

let mode = 'weekly'


const renderCards = () => {
    container2.innerHTML = "";

        container2.innerHTML = `
        <div class="container2-1">
        <div class="container2-1-1">
            <div class="container2-1-1-1">
                <img src="../images/icon-work.svg" width="59px" alt="">
            </div>
            <div class="container2-1-1-2">
                <div class="container2-1-1-2-1">
                    <p>${Data[0].title}</p>
                    <img src="../images/icon-ellipsis.svg" alt="">
                </div>
                <h1>${Data[0].timeframes[mode].current}hrs</h1>
                <p>Previous - ${Data[0].timeframes[mode].previous}hrs</p>
            </div>
        </div>

        <div class="container2-1-2">
            <div class="container2-1-2-1">
                <img src="../images/icon-play.svg" width="59px" alt="">
            </div>
            <div class="container2-1-2-2">
                <div class="container2-1-1-2-1">
                    <p>${Data[1].title}</p>
                    <img src="../images/icon-ellipsis.svg" alt="">
                </div>
                <h1>${Data[1].timeframes[mode].current}hrs</h1>
                <p>Previous - ${Data[1].timeframes[mode].previous}hrs</p>
            </div>
        </div>

        <div class="container2-1-3">
            <div class="container2-1-3-1">
                <img src="../images/icon-study.svg" width="59px" alt="">
            </div>
            <div class="container2-1-2-2">
                <div class="container2-1-1-2-1">
                    <p>${Data[2].title}</p>
                    <img src="../images/icon-ellipsis.svg" alt="">
                </div>
                <h1>${Data[2].timeframes[mode].current}hrs</h1>
                <p>Previous - ${Data[2].timeframes[mode].previous}hrs</p>
            </div>
        </div>
    </div>

    <div class="container2-2">
        <div class="container2-2-3">
            <div class="container2-2-3-1">
                <img src="../images/icon-exercise.svg" width="59px" alt="">
            </div>
            <div class="container2-2-2-2">
                <div class="container2-1-1-2-1">
                    <p>${Data[3].title}</p>
                    <img src="../images/icon-ellipsis.svg" alt="">
                </div>
                <h1>${Data[3].timeframes[mode].current}hrs</h1>
                <p>Previous - ${Data[3].timeframes[mode].previous}hrs</p>
            </div>
        </div>

        <div class="container2-2-3" style="background-color: hsl(264, 64%, 52%);">
            <div class="container2-2-3-1" style="background-color: hsl(264, 64%, 52%);">
                <img src="../images/icon-social.svg" width="59px" alt="">
            </div>
            <div class="container2-2-2-2">
                <div class="container2-1-1-2-1">
                    <p>${Data[4].title}</p>
                    <img src="../images/icon-ellipsis.svg" alt="">
                </div>
                <h1>${Data[4].timeframes[mode].current}hrs</h1>
                <p>Previous - ${Data[4].timeframes[mode].previous}hrs</p>
            </div>
        </div>

        <div class="container2-2-3" style="background-color: hsl(43, 84%, 65%);">
            <div class="container2-2-3-1" style="background-color: hsl(43, 84%, 65%);">
                <img src="../images/icon-self-care.svg" width="59px" alt="">
            </div>
            <div class="container2-2-2-2">
                <div class="container2-1-1-2-1">
                    <p>${Data[5].title}</p>
                    <img src="../images/icon-ellipsis.svg" alt="">
                </div>
                <h1>${Data[5].timeframes[mode].current}hrs</h1>
                <p>Previous - ${Data[5].timeframes[mode].previous}hrs</p>
            </div>
        </div>
    </div>
        `;
};


buttons.forEach(btn => {
    btn.addEventListener('click', function(){
        mode = btn.dataset.mode
        console.log(mode)
        renderCards()
    })
})

renderCards()
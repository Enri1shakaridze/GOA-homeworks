// 1) დაწერე ფუნქცია, რომელიც არგუმენტად იღებს sec-ს და ითვლის უკუსვლით იქმადე სანამ 0-მდე არ მივა

let paragrafh = document.getElementById('paragrafh');

let num = 10;
paragrafh.textContent = num

function decr(sec){
    if(sec > 0){
        num--;
        paragrafh.textContent = num;
    }
    if(sec === 0){
        clearInterval(a)
    }
}

let a = setInterval(() => {
    decr(num);
}, 1000);
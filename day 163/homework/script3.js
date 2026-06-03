// 3) ექმენი ფუნქცია, რომელიც ყოველ 0.5 წამში რიგრიგობით დაბეჭდავს "[ON]" და "[OFF]", ისე თითქოს ნათურა ციმციმებს.

let array = ['ON', 'OFF'];
let n = 0;
function onoff(next){
    if(n === 0){
        console.log(next[0]);
        n++;
    }else{
        console.log(next[1]);
        n--;
    }
}
let sett = setInterval(() => {
    onoff(array);
}, 300);
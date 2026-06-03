// 2) შექმენი ფუქნცია, რომელსაც გადააწოდებ რიცხვი. კონსოლში დალოგე რენდომული რიცხვი იქამდე, სანამ ეს გადაცემული და რენდომ რიცხვი არ დაემთხვევა ერთმამენთს.
let num = 10;

function getnum(sec){
    let num2 = Math.floor(Math.random() * 100);
    if(sec !== num2){
        console.log(num2);
    }else{
        console.log(num2);
        clearInterval(res);
    }
}
let res = setInterval(() => {
    getnum(num);
}, 100);
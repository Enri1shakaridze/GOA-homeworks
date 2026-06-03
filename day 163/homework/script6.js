// 6) გაქვს მასივი 3 სხვადასხვა მესიჯით. ყოველ 2 წამში გაგზავნე (დაბეჭდე) მომდევნო მესიჯი. როცა მესიჯები გათავდება, დაიწყე თავიდან (ციკლურად). ხოლო მე-4 ციკლის შემდეგ საერთოდ გათიშე ინტერვალი.

let array = ['hello', 'how are you?', 'bye bye'] 
let num = 0;
let n = 0;
let a = setInterval(() => {
    if(n === 14){
        clearInterval(a)
    }
    if(num === 3){
        num = 0;
        n++
    }else{
        console.log(array[num])
        num++
        n++
    }
}, 2000);
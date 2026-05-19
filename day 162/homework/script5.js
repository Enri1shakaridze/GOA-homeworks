
// 5) წარმოიდგინე, რომ საიტს სჭირდება ყოველ 3 წამში შეამოწმოს, არის თუ არა ახლა სამუშაო დრო. setInterval-ში Date ობიექტის გამოყენებით გაიგე მიმდინარე საათი (getHours()). თუ საათი არის 9:00-დან 18:00-მდე, ეკრანზე დაწერე "The site is active". მაგრამ, თუ საათმა გადააჭარბა 18:00-ს, ეკრანზე გამოიტანე "The working hours are over on this site." და გააჩერე ინტერვალი.

let p = document.getElementById('paragrafh2');

let date = new Date().toLocaleTimeString();
let res = ''
for(let i = 0; i < date.length; i++){
    if(date[i] === ':'){
        break;
    }else{
        res+= date[i]
    }
}
let z = setInterval(() => {
    if(Number(res) >= 9 && Number(res) <= 18){
        p.textContent = "The site is active";
    }else{
        p.textContent = "The working hours are over on this site.";
    }
    console.log(res)
}, 3000);

setTimeout(() => {
    clearInterval(z);
}, 4000);
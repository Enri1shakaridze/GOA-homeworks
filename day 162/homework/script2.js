// 2) დაწერე კოდი, რომელიც ეკრანზე რეალურ დროში აჩვენებს მიმდინარე საათს, წუთსა და წამს (ფორმატით: HH:MM:SS). დრო უნდა ნახლდებოდეს ყოველ 1 წამში Date ობიექტის დახმარებით.
// (ეს ინტერვალი არასდროს არ უნდა გაჩერდეს და მოქმედებდეს იქამდე, სანამ მომხმარებელი გვერდს არ დახურავს).

function getdatee(){
    let p = document.getElementById('paragrafh')
    let date = new Date().toLocaleTimeString();

    p.textContent = date;
}

setInterval(() => {
    getdatee();

}, 1000);
getdatee();

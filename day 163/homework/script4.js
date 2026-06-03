// 4) 3 წამში კონსოლში დაბეჭდე შემთხვევითი რიცხვი 1-დან 100-მდე. თუ რიცხვი 90-ზე მეტი აღმოჩნდება, გააჩერე პროცესი და დაბეჭდე: "The number has been found."

let a = setInterval(() => {
    let randomm = Math.floor(Math.random() * 101);
    if(randomm >= 90){
        console.log('The Number has been found');
        clearInterval(a);
        
    }else{

        console.log(randomm)
    }
}, 500);
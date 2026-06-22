let button = document.querySelector('button');

button.addEventListener('click', function(e){
    let DD = document.getElementById('DDI').value;
    let MM = document.getElementById('MMI').value;
    let YY = document.getElementById('YYI').value;
    let redlabel1 = document.getElementById('redlabel1');
    let redlabel2 = document.getElementById('redlabel2');
    let redlabel3 = document.getElementById('redlabel3');
    let first = false;
    let seccond = false;
    let third = false;
    let blue1 = document.getElementById('blue1');
    let blue2 = document.getElementById('blue2');
    let blue3 = document.getElementById('blue3');


    let time = new Date().toLocaleDateString().split('/')
    let [month, day, year] = time
    if(isNaN(DD)){
        redlabel1.style.display = 'flex'
    }else if(String(DD) === ''){
        redlabel1.style.display = 'flex'
        
    }else if(Number(DD) > 31){
        redlabel1.style.display = 'flex'
    }
    else{
        redlabel1.style.display = 'none'
        first = true;
    }
    if(isNaN(MM)){
        redlabel2.style.display = 'flex'
    }else if(String(MM) === ''){
        redlabel2.style.display = 'flex'
    }else if(Number(MM) > 12){
        redlabel2.style.display = 'flex'
    }
    else{
        redlabel2.style.display = 'none'
        seccond = true
    }
    if(isNaN(YY)){
        redlabel3.style.display = 'flex'
    }else if(String(YY) === ''){
        redlabel3.style.display = 'flex'
    }else if(Number(YY) > Number(year)){
        redlabel3.style.display = 'flex'
    }
    else{
        redlabel3.style.display = 'none'
        third = true
    }
    if(first, seccond, third){
        console.log(year)
        let blue1txt = Number(year) - Number(YY);
        let blue2txt = Number(month) - Number(MM);
        let blue3txt = Number(day) - Number(DD);
        if(blue2txt < 0){
            blue1txt--;
            blue2txt = 12 + blue2txt;
            blue1.textContent = blue1txt;
            blue2.textContent = blue2txt;
            blue3.textContent = blue3txt;
        }
        if(blue3txt < 0){
            blue2txt--;
            blue3txt = 31 + blue3txt;
            blue1.textContent = blue1txt;
            blue2.textContent = blue2txt;
            blue3.textContent = blue3txt;
        }
        console.log(blue1txt)
        console.log(Number(month))
        blue1.textContent = blue1txt;
        blue2.textContent = blue2txt;
        blue3.textContent = blue3txt;
    }

})








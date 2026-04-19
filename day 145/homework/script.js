const add = document.getElementById('btn1');

let music = [
    "./audio/jakone, kiliana - asfalt.mp3",
    "./audio/Eminem - Mockingbird [Official Music Video].mp3",
    "./audio/Piramidebi.mp3",
    "./audio/Jakone - Дорога дальняя (Mood Video).mp3",
    "./audio/Eminem - Lose Yourself.mp3",
    "./audio/50 Cent - In Da Club (Official Music Video).mp3"
]
let img = [
    'https://bananastreet.ru/system/release/cover/10/104/104737/5bd2a31f42.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-UvFSvClZVdl9qg895zsGNo3FC3rYKGCuA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbG7tsKWWJoaO9IyLyI-Gsn8BVmd_EyWtNg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hml6aHV-IlzABhjTvXL1GUC7EFS2Eew4_A&s',
    'https://i1.sndcdn.com/artworks-000143082564-ujqk5s-t500x500.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-beD_cg7HvBdV8ASnEOEvPKcOUmoICDshmQ&s',
    'https://cdn-icons-png.flaticon.com/128/13917/13917164.png'
]

let array = []

add.addEventListener('click', function() {

    const cont = document.querySelector('div')
    const input = document.getElementById('inp').value;
    const li = document.createElement('li');
    const ol = document.querySelector('ol');
    

    if(input === 'Jakone, Kiliana - Асфальт'){
        if(array.includes(input)){
            alert('ეს მუსიკა უკვე დამატებულია!')
        }else{
            let audio = document.createElement('audio');
            let picture = document.createElement('img');
            let p = document.createElement('p');
            p.textContent = 'Jakone, Kiliana - Асфальт';
            let buttonAudio = document.createElement('button');
            buttonAudio.textContent = 'Remove from List'
            audio.controls = true;
            audio.src = music[0];
            picture.src = img[0];
            li.appendChild(picture);
            li.appendChild(audio);
            li.id = 'li';
            li.style.display = 'flex';
            li.style.flexDirection = 'column';
            li.style.justifyContent = 'center';
            li.style.alignItems = 'center';
            li.appendChild(p);
            li.appendChild(buttonAudio);
    
            ol.appendChild(li);
            picture.style.width = '200px';
            picture.style.height = '280px';
            li.style.marginTop = '30px';
            audio.style.width = '50px';
            audio.id = 'audio';
            buttonAudio.id = 'buttonAudio';
            p.id = 'pAudio';
            array.push(input)
            buttonAudio.addEventListener('click', function(){
                ol.removeChild(li);
            })
        }
        

    }else if(input === 'Eminem - Mockingbird'){
        if(array.includes(input)){
            alert('ეს მუსიკა უკვე დამატებულია!')
        }else{
            let audio = document.createElement('audio');
            let picture = document.createElement('img');
            let p = document.createElement('p');
            p.textContent = 'Eminem - Mockingbird';
            let buttonAudio = document.createElement('button');
            buttonAudio.textContent = 'Remove from List'
            audio.controls = true;
            audio.src = music[1];
            picture.src = img[1];
            li.appendChild(picture);
            li.appendChild(audio);
            li.id = 'li';
            li.style.display = 'flex';
            li.style.flexDirection = 'column';
            li.style.justifyContent = 'center';
            li.style.alignItems = 'center';
            li.appendChild(p);
            li.appendChild(buttonAudio);

            ol.appendChild(li);
            picture.style.width = '200px';
            picture.style.height = '280px';
            li.style.marginTop = '30px';
            audio.style.width = '50px';
            audio.id = 'audio';
            buttonAudio.id = 'buttonAudio';
            p.id = 'pAudio';
            array.push(input)
            buttonAudio.addEventListener('click', function(){
                ol.removeChild(li);
            })
        }
        

    }else if(input === 'Piramidebi'){
        if(array.includes(input)){
            alert('ეს მუსიკა უკვე დამატებულია!')
        }else{
            let audio = document.createElement('audio');
            let picture = document.createElement('img');
            let p = document.createElement('p');
            p.textContent = 'Giga Miqaberidze Piramidebi';
            let buttonAudio = document.createElement('button');
            buttonAudio.textContent = 'Remove from List'
            audio.controls = true;
            audio.src = music[2];
            picture.src = img[2];
            li.appendChild(picture);
            li.appendChild(audio);
            li.id = 'li';
            li.style.display = 'flex';
            li.style.flexDirection = 'column';
            li.style.justifyContent = 'center';
            li.style.alignItems = 'center';
            li.appendChild(p);
            li.appendChild(buttonAudio);

            ol.appendChild(li);
            picture.style.width = '200px';
            picture.style.height = '280px';
            li.style.marginTop = '30px';
            audio.style.width = '50px';
            audio.id = 'audio';
            buttonAudio.id = 'buttonAudio';
            p.id = 'pAudio';
            array.push(input)
            buttonAudio.addEventListener('click', function(){
                ol.removeChild(li);
            })
        }
        
    }else if(input === 'Jakone - Дорога дальняя'){
        if(array.includes(input)){
            alert('ეს მუსიკა უკვე დამატებულია!')
        }else{
            let audio = document.createElement('audio');
            let picture = document.createElement('img');
            let p = document.createElement('p');
            p.textContent = 'Jakone - Дорога дальняя';
            let buttonAudio = document.createElement('button');
            buttonAudio.textContent = 'Remove from List'
            audio.controls = true;
            audio.src = music[4];
            picture.src = img[4];
            li.appendChild(picture);
            li.appendChild(audio);
            li.id = 'li';
            li.style.display = 'flex';
            li.style.flexDirection = 'column';
            li.style.justifyContent = 'center';
            li.style.alignItems = 'center';
            li.appendChild(p);
            li.appendChild(buttonAudio);

            ol.appendChild(li);
            picture.style.width = '200px';
            picture.style.height = '280px';
            li.style.marginTop = '30px';
            audio.style.width = '50px';
            audio.id = 'audio';
            buttonAudio.id = 'buttonAudio';
            p.id = 'pAudio';
            array.push(input)
            buttonAudio.addEventListener('click', function(){
                ol.removeChild(li);
            })}
        }
        
    else if(input === 'In Da Club'){
        if(array.includes(input)){
            alert('ეს მუსიკა უკვე დამატებულია!')
        }else{
            let audio = document.createElement('audio');
            let picture = document.createElement('img');
            let p = document.createElement('p');
            p.textContent = 'In Da Club';
            let buttonAudio = document.createElement('button');
            buttonAudio.textContent = 'Remove from List'
            audio.controls = true;
            audio.src = music[5];
            picture.src = img[5];
            li.appendChild(picture);
            li.appendChild(audio);
            li.id = 'li';
            li.style.display = 'flex';
            li.style.flexDirection = 'column';
            li.style.justifyContent = 'center';
            li.style.alignItems = 'center';
            li.appendChild(p);
            li.appendChild(buttonAudio);

            ol.appendChild(li);
            picture.style.width = '200px';
            picture.style.height = '280px';
            li.style.marginTop = '30px';
            audio.style.width = '50px';
            audio.id = 'audio';
            buttonAudio.id = 'buttonAudio';
            p.id = 'pAudio';
            array.push(input)
            buttonAudio.addEventListener('click', function(){
                ol.removeChild(li);
            })
        }
        
    }else{
        let audio = document.createElement('audio');
        let picture = document.createElement('img');
        let p = document.createElement('p');
        p.textContent = 'Ops Musick not found';
        let buttonAudio = document.createElement('button');
        buttonAudio.textContent = 'Remove from List'
        audio.controls = false;
        picture.src = img[img.length - 1];
        li.appendChild(picture);
        li.appendChild(audio);
        li.id = 'li';
        li.style.display = 'flex';
        li.style.flexDirection = 'column';
        li.style.justifyContent = 'center';
        li.style.alignItems = 'center';
        li.appendChild(p);
        li.appendChild(buttonAudio);

        ol.appendChild(li);
        picture.style.width = '200px';
        picture.style.height = '280px';
        li.style.marginTop = '30px';
        audio.style.width = '50px';
        audio.id = 'audio';
        buttonAudio.id = 'buttonAudio';
        p.id = 'pAudio';
        buttonAudio.addEventListener('click', function(){
            ol.removeChild(li);
        })
        p.style.marginTop = '41px'
    }
    
})
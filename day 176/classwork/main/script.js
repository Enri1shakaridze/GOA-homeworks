let prew = document.getElementById('prew');
let next = document.getElementById('next');
let mainimg = document.getElementById('imgc5');
let p = document.querySelector('p');
let h3 = document.querySelector('h3');
let img1= document.getElementById('img1');

let index = 0;


let images = [
    '../images/image-tanya.jpg',
    '../images/image-john.jpg'
]

let text = [
    `<p>“ I’ve been interested in coding for a while <br> but never taken the jump, until now. I <br> couldn’t recommend this course enough. <br> I’m now in the job of my dreams and so <br> excited about the future. ”</p><br>`,
    '<p>“ If you want to lay the best foundation <br> possible I’d recommend taking this course. <br> The  depth the instructors go into is <br> incredible.  I now feel so confident about <br> starting  up as a professional developer. ”</p><br>'
]

let users = [
    `<h3><strong>Tanya Sinclair </strong> UX Engineer</h3>`,
    `<h3><strong>John Tarkpor </strong> Junior Front-end Developer</h3>`
]

prew.addEventListener('click', function(){
    p.style.marginRight = '59px'
    img1.style.marginLeft = '109px'
    img1.style.marginTop = '30px'
    p.style.marginBottom = '-30px'
    if(index === 1){
        index = 0;
        mainimg.src = images[index]
        p.innerHTML = text[index]
        h3.innerHTML = users[index]
        return
    }
    index++
    mainimg.src = images[index]
    p.innerHTML = text[index]
    h3.innerHTML = users[index]
    console.log(index)



})


next.addEventListener('click', function(){
    if(index === 0){
        index = images.length -1;

        mainimg.src = images[index]
        p.innerHTML = text[index]
        h3.innerHTML = users[index]
        return
    }
    index--
    
    mainimg.src = images[index]
    p.innerHTML = text[index]
    h3.innerHTML = users[index]
    console.log(index)
})
import data from "../data.json" with { type: 'json'}

console.log(data)

let container1 = document.querySelector('.container1');

function rendercart(){
    container1.innerHTML = ''
    data.forEach(obj => {
        container1.innerHTML += `
            <div>
                <div>
                    <div class='childcont'>
                        <img src="${obj.image.thumbnail}">
                        <button>Add to cart</button>
                        <p>${obj.category}</p>
                        <h5>${obj.name}</h5>
                        <h5>$${obj.price}</h5>
                    </div>
                </div>
            </div>
        `
    })
}
rendercart()
import { useState } from "react";


function Wishlist(){
    const [pr, setPr] = useState(['random1', 'random2', 'random3'])
    let res = pr.map((el, index) => 
        <div key={'el_' + index}>
            <p>{el}</p>
            <button onClick={remove}>remove</button>
        </div>
    )
    function add(){
        let inp = document.getElementById('inp').value
        setPr((items) => [...items, inp ])
    }
    function remove(e){
        let div = e.target.parentElement
        div.style.display = 'none'
    }

    return (
        <div>
            <div className="divs1">
                {res}
            </div>
            <div className="divs2">
                <input id='inp' type="text" />
                <button onClick={add}>Add</button>
            </div>
        </div>
    )
}
export {Wishlist}
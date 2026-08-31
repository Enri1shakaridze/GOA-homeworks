import { useState } from "react";

function AddUniqueFruit(){
    const [fruits, setFruits] = useState(['apple', 'banana'])

    let res = fruits.map((el, index) => 
        <li key={'task_' + index}>
            {el}
        </li>
    )
    function add(){
        let inp = document.getElementById('inp').value
        setFruits((items) => inp.length !== 0 && !items.includes(inp) ? [...items, inp]: [...items])
    }
    return (
        <div>
            <ul>
                {res}
            </ul>
            <input id="inp" type="text" />
            <button onClick={add}>Add to list</button>
        </div>
    )
}
export {AddUniqueFruit}
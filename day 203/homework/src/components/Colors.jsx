import { useState } from "react";


function Colors(){
    const [colors, setColors] = useState(['red', 'green', 'blue'])

    let res = colors.map((el, index) => 
        <li key={'color_' + index}>{el}</li>
    )


    function remove(){
        let inp = document.getElementById('inp').value
        setColors((items) => items.filter((x, index) => index !== Number(inp)))
    }
    return (
        <div>
            <ul>
                {res}
            </ul>
            <input id="inp" type="text" />
            <button onClick={remove}>Remove From list</button>
        </div>
    )
}
export {Colors}
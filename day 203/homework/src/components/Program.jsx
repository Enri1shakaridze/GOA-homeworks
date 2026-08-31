import { useState } from "react";

function Program(){
    const [program_lenguage, setProgram_lenguage] = useState([])

    let res = program_lenguage.map((el, index) => 
        <li key={'progtram_' + index}>
            {el}
        </li>
    )
    function addLang(){
        let inp = document.getElementById('inp').value
        setProgram_lenguage((items) => inp.length !== 0 ? [...items, inp]: 0)
    }


    return (
        <div>
            <ul>
                {res}
            </ul>
            <input type="text" name="" id="inp" />
            <button onClick={addLang}>Add lenguage</button>
        </div>
    )
}
export {Program}
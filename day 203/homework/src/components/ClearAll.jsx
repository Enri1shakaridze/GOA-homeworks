import { useState } from "react";


function ClearAll() {
    const [clearAll, setClearAll] = useState(['BMW', 'Mercedes', 'Porshe', 'Ferrari'])

    let res = clearAll.map((el, index) => 
        <li key={index}>{el}</li>
    )
    function Remove() {
        setClearAll([])
    }
    return (
        <div>
            <ul>{res}</ul>
            <button onClick={Remove}>ClearAll</button>
        </div>
    )
}
export { ClearAll }
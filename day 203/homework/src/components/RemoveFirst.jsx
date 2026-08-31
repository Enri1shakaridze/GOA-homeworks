import { useState } from "react";


function RemoveFirstItem() {
    const [all, setArr] = useState(['BMW', 'Mercedes', 'Porshe', 'Ferrari'])

    let res = all.map((el, index) => 
        <li key={index}>{el}</li>
    )
    function Remove() {
        setArr((items) => [...items.slice(1, all.length)])
    }
    return (
        <div>
            <ul>{res}</ul>
            <button onClick={Remove}>RemoveFirst</button>
        </div>
    )
}
export { RemoveFirstItem }
import { useState } from "react";


function Tasks(){
    const [task, setTask] = useState(['Task1', 'Task2', 'Task3'])
    let res = task.map((el, index) => 
        <li key={'task_' + index}>
            {el}
        </li>
    )
    function add(){
        let inp = document.getElementById('inp').value
        setTask((items) => inp.length !== 0 ? [...items, inp]: 0)
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
export {Tasks}
import { useState, useEffect } from "react";

function Inputs(){
    const [count, setCount] = useState('')

    useEffect(()=> {
        let a = setTimeout(() => {
            console.log(count)
        }, 1000);
        return (()=> {
            clearTimeout(a)
        })
    }, [count])
    function ch(e){
        setCount(e.target.value)
    }
    return (
        <div>
            <input onChange={ch} type="text" />
        </div>
    )
}
export {Inputs}
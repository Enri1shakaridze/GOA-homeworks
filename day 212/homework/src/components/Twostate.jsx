import { useState, useEffect } from "react";

function Twos(){
    const [text, settext] = useState('')
    const [count, setcount] = useState(0)

    useEffect(()=> {
        console.log('contiune')
    }, [count])
    function ch(e){
        settext(e.target.value)
    }
    function add(){
        setcount(prew => prew+=1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={add}>Click</button>
            <p>---------------------------------------------------</p>
            <input onChange={ch} type="text" />
        </div>
    )

}
export {Twos}
import { useState, useEffect } from "react";

function Names(){
    const [name, setname] = useState('')

    useEffect(()=>{
        localStorage.setItem('name', name)

        return (()=>{
            localStorage.setItem('name', name)
        })
    })

    function change(e){
        setname(e.target.value)
    }
    return (
        <div>
            <input onChange={change} type="text" />
        </div>
    )
}
export {Names}
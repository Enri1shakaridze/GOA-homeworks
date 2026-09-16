import {useState, useEffect } from "react";

function DarkLight(){
    const [Isdark, setIsdark] = useState(false)

    useEffect(() => {
        Isdark ? document.body.style.background = 'black': document.body.style.background = 'white'
        return (() => {
            Isdark ? document.body.style.background = 'black': document.body.style.background = 'white'
        })
    }, [Isdark])

    function drk(e){
        e.target.textContent === 'Dark' ? e.target.textContent = 'Light': e.target.textContent = 'Dark'
        e.target.textContent === 'Dark' ? setIsdark(false): setIsdark(true)
    }
    return (
        <div>
            <button onClick={drk}>Dark</button>
        </div>
    )
}
export {DarkLight}
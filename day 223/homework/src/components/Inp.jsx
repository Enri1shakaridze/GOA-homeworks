import { useState, useRef, useEffect } from "react";

function Inp(){
    let count = useRef(0)
    const [resc, setresc] = useState(0)
    useEffect(()=>{
        let interval = setInterval(() => {
            setresc(count.current)
        }, 50);
    }, [])
    
    function heandler(e){
        count.current = e.target.value.length
    }
    return (
        <div>
            <p>დარენდერდა {resc} ჯერ</p>
            <input type="text" onChange={heandler} name="" id="" />
        </div>
    )
}
export {Inp}
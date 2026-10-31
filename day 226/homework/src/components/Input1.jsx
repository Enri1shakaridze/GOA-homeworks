import { useRef } from "react";

export function Input1(){
    const countRef = useRef(null)
    function heandler(){
        countRef.current.focus()
        countRef.current.select()
    }
    return (
        <div>
            <input ref={countRef} type="text" name="" id="" />
            <button onClick={heandler}>focus</button>
        </div>
    )
}

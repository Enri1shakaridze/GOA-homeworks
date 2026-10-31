import { useRef } from "react";

export function Passw(){
    const countRef = useRef(null)
    function heandler(){
        countRef.current.type === 'password'? countRef.current.type = 'text':countRef.current.type = 'password'
    }
    return (
        <div>
            <input ref={countRef} type="password" name="" id="" />
            <button onClick={heandler}>focus</button>
        </div>
    )
}

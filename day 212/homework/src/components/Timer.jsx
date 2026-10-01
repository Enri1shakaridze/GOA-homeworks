import { useState, useEffect } from "react"
function Timer(){
    const [count , setCount] = useState(0)
    useEffect(()=>{
        let a = setInterval(() => {
            setCount(count+1)
        }, 1000);

        return () => {
            clearInterval(a)
        }
    })
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}
export {Timer}
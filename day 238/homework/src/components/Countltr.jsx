import { useEffect, useState } from "react"

export function Countltr(){
    const [count, setcount] = useState(0)

    useEffect(()=>{
        if(count>= 100){
            document.getElementById('redp').style.color='red'
            return
        }
        document.getElementById('redp').style.color='black'

    },[count])

    return (
        <div>
            <input onChange={(e) => setcount(e.target.value.length)} type="text" name="" id="" />
            <p id="redp">{count}</p>
        </div>
    )
}
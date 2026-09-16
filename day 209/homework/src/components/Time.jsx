import { useState, useEffect } from "react";

function Time(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        const a = setInterval(() => {
            setCount(count+1)
        }, 1000);

        return (() => {
            clearInterval(a)
        })
    })

    return (
        <div>
            <p>{count}</p>
        </div>
    )
}
export {Time}
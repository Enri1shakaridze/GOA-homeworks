import { useRef, useState, useEffect } from "react";

function Time() {
    const [times, settimes] = useState(0)
    let count = useRef('')

    useEffect(()=>{
        let interval = setInterval(() => {
            if (count.current === '1'){
                settimes((prew) => prew+=1)
            }
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <p>{times}</p>
            <button onClick={() => count.current = "1"}>Start</button>
            <button onClick={() => count.current = "0"}>Stop</button>
        </div>
    )
}
export { Time }
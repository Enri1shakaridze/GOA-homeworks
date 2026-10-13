import { useEffect, useState, useEffectEvent } from "react";

function Main(){
    const [volume, setvolume] = useState(50)

    let us = useEffectEvent(()=>{
        console.log('volume:', volume)
    })

    useEffect(()=>{
        let a = setInterval(() => {
            us();
        }, 1000);

        return () => clearInterval(a)
    }, [])
    
    return (
        <div>
            <h1>{volume}</h1>
            <button onClick={() => setvolume(prew => prew + 1)}>increase</button>
            <button onClick={() => setvolume(prew => prew - 1)}>decrease</button>
        </div>
    )
}
export {Main}
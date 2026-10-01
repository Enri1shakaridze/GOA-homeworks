import { useState, useEffect } from "react"

function Height(){

    const [size, setSize] = useState(window.innerHeight)

    useEffect(()=>{
        function Ret(){
            console.log(window.innerHeight)
            setSize(window.innerHeight)
        }
        window.addEventListener('resize', Ret)
        return () => window.removeEventListener('resize', Ret)
    }, [])
}
export {Height}
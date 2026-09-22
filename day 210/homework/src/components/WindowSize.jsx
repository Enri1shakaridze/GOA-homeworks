import { useState, useEffect } from "react";

function WindowSize() {
    const [size, setSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize(){
            console.log('resizing...')
            setSize(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return (()=>{
            window.removeEventListener('resize', handleResize)
        })
    }, [ ])

    return (
        <div>
            <p>{size}</p>
        </div>
    )
}
export { WindowSize }
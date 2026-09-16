import {useState, useEffect } from "react"
function Colors(){
    const [color, setcolor] = useState('white')
    useEffect(()=>{
        document.getElementById('divs').style.background = color
        return (() => {
            document.getElementById('divs').style.background = color
        })
    }, [color])
    function yellow(){
        setcolor('yellow')
    }
    function green(){
        setcolor('green')
    }
    function red(){
        setcolor('red')
    }
    return (
        <div>
            <button onClick={yellow}>yellow</button>
            <button onClick={green}>green</button>
            <button onClick={red}>red</button>
            <div id="divs" style={{width:'100px', height: '100px'}}></div>
        </div>
    )
}
export {Colors}
import { useState, useEffect } from "react";

function Two(){
    const [dark, setdark] = useState(JSON.parse(localStorage.getItem('isdark')) || false)
    const [text, settext] = useState([])
    useEffect(()=> {
        document.body.style.background = `${dark ? 'white' : 'black'}`
    }, [dark])
    function darks(){
        if (dark){
            localStorage.setItem('isdark', JSON.stringify(false))
            setdark(false)
        }else{
            localStorage.setItem('isdark', JSON.stringify(true))
            setdark(true)
        }
    }
    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then(response => response.json())
        .then(data => {
            console.log(data)
            settext(data)
        });
        
    }, [])

    return (
        <div>
            <button onClick={darks}>{dark ? 'dark': 'light'}</button>
            
        </div>
    )

}
export {Two}
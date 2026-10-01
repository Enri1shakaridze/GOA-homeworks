import { useState, useEffect } from "react";
function Apis() {
    const [text, settext] = useState([])

    useEffect(()=>{
        async function render(){
            try{
                let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
                let data = await response.json()
                settext(data)
                console.log(data)
            }
            catch{
                console.log('error!')
            }
        }
        render();
    }, [])
}
export {Apis}
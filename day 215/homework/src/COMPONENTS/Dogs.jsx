import { useState, useEffect } from "react"
let api = 'https://catfact.ninja/fact'

function Dogs(){
    const [dog, setdog] = useState(0)
    const [text, settext] = useState('')

    useEffect(()=> {
        fetch('https://catfact.ninja/fact').then((response) => response.json()).then((data) => settext(data.fact)).catch((err) => console.log(err))
    }, [dog])
    return (
        <div>
            <button onClick={() => setdog((prew) => prew += 1)}>new</button>
            <p>{text}</p>
        </div>
    )
}
export {Dogs}
import { useEffect } from "react"

function Renders(){
    useEffect(()=>{
        console.log('წარმატებით დაიბეჭდა')
    },[])
    return (
        <div>
            <input type="text" placeholder="name" />
            <input type="text" placeholder="email" />
            <button>Submit</button>
        </div>
    )
}
export {Renders}
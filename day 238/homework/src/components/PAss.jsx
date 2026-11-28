import { useState } from "react"

export function Passw() {
    const [apc, setapc] = useState(false)
    const alphabet = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l", "m", "n","o", "p", "q", "r", "s", "t", "u","v", "w", "x", "y", "z"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

    return (
        <div>
            <input onChange={(e) => {
                let numt = e.target.value.split('').filter((x) => alphabet.includes(x))
                let numl = e.target.value.split('').filter((x) => numbers.includes(x))
                numt.length >=1 && numl.length>=1 && e.target.value.length>=8? setapc(true) : setapc(false)
            }} type="text" name="" id="" />
            <p>{apc ? '✓' : '✕'}</p>
        </div>
    )
}
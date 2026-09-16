import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Count ${count}`

        return (() => {
            document.title = `Count ${count}`
        })
    }, [count])
    function decrease() {
        setCount(count - 1)
    }
    function increase() {
        setCount(count + 1)
    }
    function reset() {
        setCount(0)
    }

    return (
        <div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export {Counter}
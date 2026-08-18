import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function decrease(){
    setCount(count-1)
  }
  function increase(){
    setCount(count+1)
  }
  function reset(){
    setCount(0)
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button>
    </>
  )
}

export default App

import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  function heandler(e){
    countRef.current.focus()
    e.target.previousElementSibling.style.outline = '1px solid red'
  }
  // window.addEventListener('click', function(){
  //   document.getElementById('ev').style.outline = 'none'
  // })

  return (
    <>
    <input id='ev' type="text" ref={countRef} />
    <button onClick={heandler}>Focus</button>
    </>
  )
}

export default App

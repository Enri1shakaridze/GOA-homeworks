import { useEffect, useState, useEffectEvent } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const events = useEffectEvent(()=>{
    console.log('clicked')
  })
  useEffect(()=>{
    let btns = document.getElementById('btns')
    btns.addEventListener('click', events)
    return () => btns.removeEventListener('click', events)
  }, [])

  return (
    <>
      <button id='btns'>click</button>
    </>
  )
}

export default App

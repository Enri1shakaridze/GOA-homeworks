import { useState } from 'react'
import './App.css'
import { Countltr } from './components/Countltr'
import { Buy } from './components/Buy'
import { Passw } from './components/PAss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Countltr/> */}
    {/* <Buy/> */}
    <Passw/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { GrosseryList } from './components/grosserylist'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GrosseryList />
    </>
  )
}

export default App

import { useState, useMemo } from 'react'
const array = [
  {
    name: 'bread',
    price: 12,
    id: 1
  },
  {
    name: 'orange',
    price: 22,
    id: 2
  },
  {
    name: 'apple',
    price: 1,
    id: 3
  },
  {
    name: 'chery',
    price: 2,
    id: 4
  },
]
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  let sorts = useMemo(() => {
    return array.sort((a, b) => a.price - b.price)
  }, [array])
  return (
    <>
    <button onClick={() => setCount((prew) => prew+1)}>add + 1</button>
    <p>{count}</p>
    {sorts.map((el, index) => {
      return (
      <ul key={index}>
        <li>{el.name}</li>
        <li>{el.price}</li>
      </ul>)
    })}
    </>
  )
}

export default App

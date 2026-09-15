import { useState, useEffect } from 'react'
import './App.css'
// დაწერეთ counter აპი: ჰქონდეს increment, decrement, reset. (counter-ი აუცილებლად useState-ით უნდა დაწეროთ).
// ყოველი count-ის ცვლილებაზე გაუშვით useEffect-ის კოდი, რომელიც კონსოლში დალოგავს: 'Count is: {count}'.
// ასევე, დაწერეთ return statement, რომ გაასუფთავოთ useEffect-ის კოდი.
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`count is ${count}`)

    return (() => {
      console.log('Cleaning...')
    })
  }, [count])

  function increase(){
    setCount(count+1)
  }
  function decrease(){
    setCount(count-1)
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

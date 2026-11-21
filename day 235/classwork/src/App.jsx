import { useState, useMemo, useEffect } from 'react'
// შექმენით კომპონენტი და მასში დაამატეთ number მდგომარეობა(state), რომლის მნიშვნელობაც იზრდება ღილაკზე დაჭერით.
// ასევე დაამატეთ darkMode მდგომარეობა, რომელიც ცვლის კომპონენტის ფონს. კომპონენტში უნდა დაამატოთ ფუნქცია, რომელიც გამოითვლის რიცხვის ფაქტორიალს. თქვენი დავალებაა გამოიყენოთ useMemo, რომ darkMode რეჟიმის ცვლილებამ ფაქტორიალის ფუნქციის თავიდან რენდერი არ გამოიწვიოს.

// გამოიყენეთ useMemo მხოლოდ მაშინ, როდესაც number-ის მდგომარეობა იცვლება. (მიაქციეთ dependency არგუმენტს ყურადღება)
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dark, setdark] = useState(false)

  useEffect(()=>{
    dark ? document.body.style.background = 'white' : document.body.style.background = 'black'
  }, [dark])

  let fact = useMemo(()=>{
    let res = 1
    for (let i = 1; i < count+1; i++){
      res*=i
    }
    return res
  }, [count])

  return (
    <>
    <button onClick={() => setCount((prew) => prew+1)}>click</button>
    <p>{count}</p>
    <button onClick={() => setdark(!dark)}>{dark ? 'dark' : 'light'}</button>
    {count !== 0? fact: 0}
    </>
  )
}

export default App

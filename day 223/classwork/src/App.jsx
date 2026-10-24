import { useState, useRef } from 'react'
import './App.css'
// 1) შექმენით counter აპლიკაცია useState-ით. დაამატეთ handleIncrement და handleDecrement ფუნქციები, ასევე count-ის მნიშვნელობა გამოიტანეთ ეკრანზე, შესაბამის ღილაკებთან ერთად. ასევე შექმენით useRef ჰუკით countRef ცვლადი და გაზარდეთ/შეამცირეთ მისი მნიშვნელობა handleIncrement და handleDecrement ფუნქციებში. გამოიტანეთ state ცვლადი და useRef ცვლადი ერთად ორივე ფუნქციის ბოლოში და დააკვირდით მათ შორის განსხვავებას.
// დავალების შესრულების და ტერმინალზე დაკვირვების შემდეგ კომენტარით ახსენით რატომაა ასეთი განსხვავება useState და useRef ჰუკებს შორის.

// state ს ინახავს ყოველთვის მონაცემის წინანდელ მნიშვნელობას ამიტომ როცა გამოგვაქ ტერმინალში წინანდელ მონაცემს გვიბეჭდავს
// useRef ი კი ინახავს ესევთქვათ იმჟამინდელ მდგომარეობას არ ინახავს წინა მდგომარეობას
function App() {
  const [count, setCount] = useState(0)
  const countRef = useRef(0) 
  function handleIncrement(){
    setCount(count+1)
    countRef.current+=1
    console.log(countRef.current)
    console.log(count)
  }
  function handleDecrement(){
    setCount(count-1)
    countRef.current-=1
    console.log(countRef.current)
    console.log(count)

  }

  return (
    <>
    <p>{count}</p>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
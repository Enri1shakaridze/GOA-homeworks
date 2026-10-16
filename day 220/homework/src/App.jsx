import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// 2) ახსენით რა არის useEffectEvent და რა შემთხვევაში გვადგება მისი გამოყენება

// useEffectEvent არის რეაქთის ერთ ერთი ჰუკი, რომელიც საშუალებას გვაძლევს გამოვყოთ მოვლენები ეფექტისგან, ამ შემთხვევაში useeffect გაეშვება ერთჯერ ყოველთვის და მოვლენებს useeffectevent ით გავაკონტროლებთ რაც უფრო ჩქარია რანდგან useeffect რამოდენიმეჯერ აღარგაეშვება
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    </>
  )
}

export default App

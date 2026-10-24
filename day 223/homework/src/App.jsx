import { useState } from 'react'
import './App.css'
// useRef-ის გამოყენებით შეასრულეთ დავალებები:
// 2) შექმენი წამზომი Start და Stop ღილაკებით. როდესაც Start-ს დააჭერ, ეკრანზე წამები უნდა იზრდებოდეს (მაგალითად, ყოველ წამში 1-ით მეტი). როდესაც Stop-ს დააჭერ, ათვლა უნდა გაჩერდეს.
import { Time } from './components/Time'
// 3) შექმენი input, სადაც ტექსტს შეიყვან. დაითვალე რენდერების რაოდენობა და ეკრანზე გამოიტანე ტექსტი: "ეს კომპონენტი დარენდერდა X-ჯერ".
import { Inp } from './components/Inp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Time/> */}
    <Inp/>
    </>
  )
}

export default App

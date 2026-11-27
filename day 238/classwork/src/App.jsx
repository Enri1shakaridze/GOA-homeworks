import { useState } from 'react'
import './App.css'
// შექმენით ვებსაიტი სახელწოდებით Card Info, სადაც გექნებათ სამი ინფუთი: Card Number, Expiration Date და CVV.
// input ველების ქვემოთ h2 თეგებში გამოიტანეთ ეტაპობრივად ამ ველებში შეყვანილი ინფორმაცია. (გამოიყენეთ onChange მოვლენის მსმენელი და useState)
import { CardInfo } from './components/CardInfo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CardInfo/>
    </>
  )
}

export default App

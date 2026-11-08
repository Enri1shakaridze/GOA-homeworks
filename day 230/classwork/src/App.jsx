import { useState } from 'react'
import './App.css'
import { Comp1 } from './components/Comp1'
// 1) შექმენი პაროლის შესაყვანი ველი (type="password"). ინფუთის ველის გვერდზე დაამატე თვალის icon. useRef-ის დახმარებით დაწერეთ მსგავსი ლოგიკა: ამ icon-ზე დაკლიკებისას ველში ჩაწერილი პაროლი უნდა გამოჩნდეს, კიდევ ერთხელ დაკლიკებისას ისევ დაიმალოს.
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Comp1 />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Main } from './pages/Main'
// შექმენით ცვლადი volume. რომელიც თავიდან იქნება 50. ეს მნიშვნელობა ეკრანზე h1-ში გამოიტანეთ. დაამატეთ ღილაკები + და -. პლიუსზე დაკლიკებისას volume state-ს მოუმატეთ ერტთი, ხოლო მინუსზე დაკლიკებისას გამოაკელით ერთი. გამოიყენეთ useEffectEvent-, რომ ყოველ წამში კონსოლში დაიბეჭდოს volume-ის მიმდინარე მნიშვნელობა. (ამისთვის useEffect-ში setInterval-ის დამატება დაგჭირდებათ).
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
    </>
  )
}

export default App

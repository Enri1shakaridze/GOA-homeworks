import { useState } from 'react'
import './App.css'
// შექმენით input ველი და შეიყვანეთ ტექსტი. გამოიყენეთ useState ჰუკი, რომ ველში შეყვანილი ტექსტი პარაგრაფში აისახოს წერის დროს.
function App() {
  const [email, setEmail] = useState('')
  const heandler = (event) => {
    setEmail(event.target.value)
  }
  return (
    <>
    <input type="text" onChange={heandler}/>
    <p>email: {email}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

// 1) შექმენით random ცვლადი, სადაც Math.random() -ის გამოყენებით 50%-იანი შანსით დააბრუნებთ 'Heads' ან 'Tails'. გამოიყენეთ Ternary, რომ ფოტოს ლინკი გაუტოლდეს Javascript-ს თუ 'Heads' დაბრუნდება, ხოლო React-ს, თუ 'Tails' დაბრუნდება

function App() {
  let random = Math.random() < 0.5 ? 'heads' : 'tails';

  return (
    <>
      <img src={random === 'heads' ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ829tD1Q0jkNFMV9nmXQBcaOC5koshnDOSr1GuZ8cY6A&s=10' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'} alt="" />
    </>
  )
}

export default App

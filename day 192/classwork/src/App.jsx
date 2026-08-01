import { useState } from 'react'
import './App.css'

// 1) Event Listeners

// შექმენით რეაქთის ფოლდერი. საიტზე დაამატეთ ჯავასკრიპტის ლოგოს ფოტო, მას ვგაუწერეთ alt ატრიბუტიც. გამოიყენეთ mouseOver event listener-ი, იმისთვის რომ ფოტოზე დაკლიკებისას ჯავასკრიპტის ლოგო რეაქთის ლოგოთი შეიცვალოს. ასევე შეუცვალეთ alt ატრიბუტი

function App() {
  function clc(e){
    e.target.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUmRyWIGFaEwnciDv-qVsNPQDzU3LLZm6a9hAinDR7w&s=10')
  }

  return (
    <>
      <img onMouseOver={clc} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ829tD1Q0jkNFMV9nmXQBcaOC5koshnDOSr1GuZ8cY6A&s=10" alt="" />
    </>
  )
}

export default App

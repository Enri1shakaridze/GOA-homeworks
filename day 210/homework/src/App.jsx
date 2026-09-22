import { useState } from 'react'
import './App.css'
// 2) შექმენით კომპონენტი WindowSize, რომელიც რეალურ დროში აჩვენებს ეკრანის სიგანეს (window.innerWidth). useEffect-ში დაამატეთ event listener, რომელიც დააკვირდება ფანჯრის ზომის შეცვლას. შექმენით ფუნქცია handleRezise. handleResize ფუნქციაში console.log("Resizing...")-ით დაბეჭდეთ ტექსტი და განაახლეთ state.დაამატეთ Hide/Show ღილაკი ამ კომპონენტისთვისაც. დამალეთ კომპონენტი და შეცვალეთ ბრაუზერის ფანჯრის ზომა. დააკვირდით Console-ს — იბეჭდება თუ არა "Resizing..." მაშინაც კი, როცა კომპონენტი ეკრანზე აღარ არის?

// დაკვირვეის შემდეგ დაამატეთ cleanup ფუნქცია, რომელიც წაშლის event listener-ს.
// შეამოწმეთ Console — კომპონენტის დამალვის შემდეგ resize ივენთი აღარ უნდა ტრიგერდებოდეს.
import { WindowSize } from './components/WindowSize'
// 3) შექმენით საძიებო ინპუტი (<input />). როდესაც მომხმარებელი აკრეფს ტექსტს, API-ს სიმულაციისთვის Console-ში უნდა დაიბეჭდოს: Fetching data for: [ტექსტი]. useEffect უნდა გაეშვას საძიებო state-ის ცვლილებაზე ([searchTerm]).
// useEffect-ში ჩასვით setTimeout, რომელიც 1 წამის შემდეგ დაბეჭდავს ტექსტს Console-ში.
// სწრაფად აკრიფეთ სიტყვა "React" (5 სიმბოლო). დააკვირდით Console-ს. 

// დაკვირვების შემდეგ დაამატეთ cleanup ფუნქცია: return () => clearTimeout(timeoutId). ხელახლა აკრიფეთ სწრაფად "React". დარწმუნდით, რომ Console-ში მოთხოვნა იბეჭდება მხოლოდ ერთხელ, ბოლო ასოს აკრეფიდან 1 წამის შემდეგ.
import { Inputs } from './components/Inputs'
function App() {
  const [show, setShow] = useState(true)

  return (
    <>
    {/* N1 */}
      {/* <button onClick={() => setShow(true)}>Show</button>
      <button onClick={() => setShow(false)}>Hide</button>
      {show ? <WindowSize/>: ''} */}
    {/* N2 */}
    {/* <Inputs/> */}
    </>
  )
}

export default App

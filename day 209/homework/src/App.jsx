import { useState, useEffect } from 'react'
import './App.css'
// 2) შექმენი Count კომპონენტი, სადაც გექნება გაზრდისა და შემცირების ღილაკები. ყოველ ჯერზე, როდესაც count state შეიცვლება, useEffect-მა უნდა განაახლოს ბრაუზერის ტაბის სათაური (document.title), მაგალითად ასე: "Count: 5".
import { Counter } from './components/Count'
// 3) შექმენი წამზომის კომპონენტი, რომელიც ეკრანზე წამების ათვლას ახდენს. ეფექტში გამოიყენე setInterval ფუნქცია, რომელიც ყოველ 1 წამში გაზრდის ათვლილი წამების რაოდენობას. გასუფთავების ფუნქციაში აუცილებლად გამოიძახე clearInterval.
import { Time } from './components/Time'
// 4) შექმენი ღილაკი, რომელიც ცვლის isDarkMode state-ს (true / false). useEffect-ში ადევნე თვალი ამ state-ს და ყოველ ცვლილებაზე document.body.style.backgroundColor-ს მიანიჭე შავი ან თეთრი ფერი იმის მიხედვით, ჩართულია თუ არა Dark Mode.
import { DarkLight } from './components/DarkLight'
// 5) შექმენი textarea ინპუტი და state ტექსტისთვის. useEffect-ში ადევნე თვალი ტექსტის სიგრძეს. თუ შეყვანილი სიმბოლოების რაოდენობა გადააჭარბებს 50-ს, ეფექტიდან გამოიტანე alert("ლიმიტი ამოწურულია!") ან განაახლე ცალკე warningMessage state.
import { Texatrea } from './components/Texatrea'
// 6) შექმენი სამი ღილაკი: 'red', 'blue' და 'yellow' და შესაბამისი state selectedColor. useEffect-ში ადევნე თვალი არჩეულ ფერს და შეცვალე სპეციალური დივ-კონტეინერის ფონი არჩეული მნიშვნელობის მიხედვით.
import { Colors } from './components/Colors'
// 7) შექმენი input ველი, სადაც მომხმარებელი წერს თავის სახელს. ყოველ ჯერზე, როდესაც სახლის state შეიცვლება, useEffect-მა ეს სახელი უნდა შეინახოს ბრაუზერის მეხსიერებაში localStorage.setItem('username', name) ბრძანებით.
import { Names } from './components/Names'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* N1 */}
    {/* <Counter/> */}

    {/* Time */}
    {/* <Time/> */}

    {/* N3 */}
    {/* <DarkLight/> */}

    {/* N4 */}
    {/* <Texatrea/> */}

    {/* N5 */}
    {/* <Colors/> */}

    {/* N6 */}
    <Names/>
    </>
  )
}

export default App

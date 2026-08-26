import { useState } from 'react'
import './App.css'
import { Post } from './components/post'
// 1) გაიარეთ Level 200-ში მოცემული თავები.

// 2) useState() hook-ის გამოყენებით დაწერეთ counter აპლიკაცია, რომელსაც ექმენა Increment, Decrement და Reset ფუნქცია. Reset ფუნქციამ Count-ის მნიშვნელობა 0 უნდა გახადოს. დაამატეთ ლოგიკა: როდესაც რიცხვი დადებითი იქნება იგი მწვანედ გამოაჩინეთ, როცა უარყოფითი იქნება წითლად ხოლო როდესაც 0 იქნება ლურჯად. გამოიყენეთ ternary ოპერატორი.

// 3) useState() hook-ის გამოყენებით შექმენით ღილაკი, რომელზე დაეჭერამაც ეკრანზე ხან უნდა გამოაჩინოს, ხან კი დამალოს რეაქთის ლოგოს ფოტო.

// 4) შექმენით ღილაკი, რომელიც ყოველ დაჭერაზე საიტის უკანა ფეპნს შეცვლის. (ხან LightMode, ხან DarkMode უნდა იყოს.)

// 5) შექმენით Post კომპონენტი, სადაც მოცემული იქნება ფოტო და პოსტის ტექსტი, მასში ასევე დაამატეთ Like კომპონენტი. Like კომპონენტი შემდეგნაირად უნდა მუშაობდეს: კომპონენტში შექმენით 'Like' ღილაკი, რომელზე დაჭერისას მოწონების სტატუსი გააქტიურდება: მაგ ლაიქი/გული გაფერადდება. მასზე დაკლიკებამ ლაიქების რაოდენობა 1-ით უდა გაზარდოს, ხოლოდ როდესაც აქტიური არ იქნება ლაიქების რაოდენობა უნდა მოაკლდეს. მაქსიმალურად გასტილეთ ეს კომპონენტი და საიტზე მინიმუმ 5 განსხვავებული პოსტი დაარენდერეთ map-ის საშუალებით.
const posts = [
  {
    like: false,
    imgs: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    text: 'this is java',
    liken: 120,
  },
  {
    like: false,
    imgs: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    text: 'this is cpp',
    liken: 1020,
  },
  {
    like: false,
    imgs: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
    text: 'this is html',
    liken: 1210,
  },
  {
    like: false,
    imgs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPx8gL7wGhdiy3Ic9mZTFKwUKA7j1O20n2FHyspPsabLPA9z83D44cpciR&s=10',
    text: 'this is js',
    liken: 10,
  },
  {
    like: false,
    imgs: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail',
    text: 'this is react',
    liken: 20,
  },
]
function App() {
  const [count, setCount] = useState(0)
  const [ligthDark, setlightDark] = useState('light')
  const [onoff, setOnOff] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5dze-_MPeW0kI3KQrU1arrx5U8tU3J58C0_ZrPAgWw&s')
  const root = document.getElementById('root')
  // root.style.background = ligthDark === "light" ? 'white' : "black"
  function decrease(){
    setCount(count-1)
  }
  function increase(){
    setCount(count+1)
  }
  function reset(){
    setCount(0)
  }
  function heandlerbtn(){
    onoff === 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5dze-_MPeW0kI3KQrU1arrx5U8tU3J58C0_ZrPAgWw&s'? setOnOff(''): setOnOff( 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe5dze-_MPeW0kI3KQrU1arrx5U8tU3J58C0_ZrPAgWw&s')
  }
  function rootcolor(){
    ligthDark === "light"? setlightDark('dark') : setlightDark('light')
  }
  return (
    <>
    {/* N 1 */}
      {/* <p style={{color: count > 0 ? 'green': count < 0? 'red' : 'blue'}}>{count}</p>
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={reset}>reset</button> */}

    {/* N 2 */}
      {/* <button onClick={heandlerbtn}>react logo</button>
      <img src={onoff} alt="" /> */}
    {/* N 3 */}
      {/* <button onClick={rootcolor}>{ligthDark === 'light' ? 'dark' : 'light'}</button> */}

    {/* N 4 */}
      <Post posts={posts} />
    </>
  )
}

export default App
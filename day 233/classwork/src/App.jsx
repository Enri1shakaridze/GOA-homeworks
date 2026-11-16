import { useEffect, useState } from 'react'
import './App.css'
// 5) შექმენით ახალი UseState რომელსაც მნიშვნელობად მიანიჭებთ 0-ს 
// 6) შექმენი ახალი UseEffect რომელიც იმუშავებს შემდეგნაირად: 
//   1) თუ რიცხვი არის კენტი გამოიტანეთ $'რიცხვი კენტია {count}' და ქაუნთი
//   2) თუ ლუწია იგივე ლუწის შემთხვევაში
// 7) დაამატეთ შემდეგი ილაკები : +1; -1; +5; -5; +10; -10
import { Fakeapi } from './components/Api'
function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   count % 2 === 0 ? console.log(`count ლუწია: ${count}`): console.log(`count კენტია: ${count}`);
  // }, [count])

  return (
    <>
    {/* <button onClick={() => setCount((prew) => prew + 1)}>+1</button>
    <button onClick={() => setCount((prew) => prew - 1)}>-1</button>
    <button onClick={() => setCount((prew) => prew + 5)}>+5</button>
    <button onClick={() => setCount((prew) => prew - 5)}>-5</button>
    <button onClick={() => setCount((prew) => prew + 10)}>+10</button>
    <button onClick={() => setCount((prew) => prew - 10)}>-10</button>
    <button onClick={() => setCount(0)}>reset</button> */}
    <Fakeapi/>
    </>
  )
}

export default App

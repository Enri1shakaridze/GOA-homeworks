import { useState } from 'react'
import './App.css'
// 2) გვაქვს state ცვლადი სახელწოდებით tasks (უნდა იყოს მასივი). default-ად მისი მნიშველობა უნდა იყოს [Task2, Task3, Task4]. დაწერე addTask() ფუნქცია, რომელიც ახალ დავალებას ჩაამატებს მასივის თავში.
import { Tasks } from './components/Tasks'
// 3) გვაქვს state ცვლადი სახელწოდებით programming_langs (უნდა იყოს მასივი). დაწერე addLang() ფუნქცია, რომელიც ახალ თეგს ჩაამატებს მასივის ბოლოში spread ოპერატორის გამოყენებით.
import { Program } from './components/Program'
// 4) გვაქვს tate ცვლადი სახელწოდებით colors. მისი default მნიშვნელობა იყოს ['red', 'green', 'blue']). დაწერე removeColor() ფუნქცია, რომელიც .filter() მეთოდით წაშლის ელემენტს მითითებული ინდექსის მიხედვით.
import { Colors } from './components/Colors'
// 5) დაწერე removeFirstItem() ფუნქცია, რომელიც წაშლის მასივიდან პირველ ელემენტს და განაახლებს state-ს.
import { RemoveFirstItem } from './components/RemoveFirst'
// 6) დაწერე clearAll() ფუნქცია, რომელიც items state-ს გახდის სრულიად ცარიელ მასივს
import { ClearAll } from './components/ClearAll'
// 7) გვაქვს const [fruits, setFruits] = useState(['apple', 'banana']). დაწერე addUniqueFruit(newFruit) ფუნქცია, რომელიც ახალ ხილს ჩაამატებს მხოლოდ იმ შემთხვევაში, თუ ის უკვე არ არის მასივში.
import { AddUniqueFruit } from './components/Addfurit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* N1 */}
    {/* <Tasks /> */}

    {/* N2 */}
    {/* <Program /> */}

    {/* N3 */}
    {/* <Colors /> */}

    {/* N4 */}
    {/* <RemoveFirstItem /> */}

    {/* N5 */}
    {/* <ClearAll /> */}

    {/* N6 */}
    {/* <AddUniqueFruit /> */}
    </>
  )
}

export default App

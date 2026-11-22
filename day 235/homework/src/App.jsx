import { useState, useMemo, useEffect } from 'react'
import './App.css'
let array = [
  "Apple", "Banana", "Milk", "Bread", "Cheese", "Chocolate", "Coffee", "Rice", "Chicken", "Eggs", "Butter", "Orange Juice", "Tomatoes","Potatoes", "Pasta", "Yogurt", "Honey", "Cereal", "Olive Oil", "Strawberries"
]
// 2) შექმენით პროდუქტების ძებნის კომპონენტი, სადაც გვექნება პროდუქტების დიდი მასივი. ასევე, გვაქვს საძიებო ველი (searchQuery), რომლის საშუალებითაც ვფილტრავთ სიას.
// და counter რომელიც უბრალოდ ითვლის ღილაკზე დაწკაპუნებების რაოდენობას.

// პრობლემა: counter-ზე დაჭერისას (count-ის ცვლილებისას) კომპონენტი რენდერდება და სია ყოველ ჯერზე თავიდან იფილტრება, რაც არაეფექტურია.

// გამოიყენეთ useMemo, რათა პროდუქტების ფილტრაცია მოხდეს მხოლოდ მაშინ, როდესაც იცვლება საძიებო სიტყვა (searchQuery) ან თავად პროდუქტების სია.
function App() {
  const [count, setCount] = useState(0)
  const [arrs, setarrs] = useState('')

  function heandler(e){
    setarrs(e.target.value)
  }

  let res = useMemo(()=>{
    return array.filter((x) => x.toLowerCase().includes(arrs.toLowerCase()))
  }, [arrs])

  return (
    <>
    <input onChange={heandler} type="text" />
    {res.map((x, y) => {
      return (
        <div key={y}>
          <p>{x}</p>
        </div>
      )
    })}
    <button onClick={() => setCount((prew) => prew+1)}>click</button>
    <h5>{count}</h5>
    </>
  )
}

export default App
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setdata] = useState([])
  const [st, setst] = useState(false)
  useEffect(()=>{
    async function heandler() {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await response.json();
      setdata(data)
      setst(true)
    }
    heandler();
  },[])

  let res = data.map((x, y) => {
    console.log(x)
    return (
      <div className='divs' key={y}>
        <h4>{x.name}</h4>
        <h4 className='h44'>{x.phone}</h4>
        <h4>website {x.website}</h4>
      </div>
    )
  })

  return (
    <>
    <h2>{st?'':'იტვირთება...'}</h2>
    <div className='diva'>
      {res}
    </div>
    </>
  )
}

export default App

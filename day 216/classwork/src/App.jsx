import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main'
import { About } from './pages/about'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route index element={<Main />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App

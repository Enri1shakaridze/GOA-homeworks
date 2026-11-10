import { useState } from 'react'
import './App.css'
import { ToDoList } from './components/main'
import Trash from 'lucide-react/icons/trash';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToDoList/>
    </>
  )
}

export default App

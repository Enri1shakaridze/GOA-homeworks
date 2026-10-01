import { useState } from 'react'
import './App.css'

import { Renders } from './components/Randers'
import { Timer } from './components/Timer'
import { Height } from './components/Height'
import { Twos } from './components/Twostate'
import { Apis } from './components/Api'
import UserProfile from './components/Bug'
import { Two } from './components/TwhoTwho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* n1 */}
      {/* <Renders/> */}

    {/* n2 */}
      {/* <Timer/> */}

    {/* n3 */}
      {/* <Height/> */}

    {/* n4 */}
      {/* <Twos/> */}

    {/* n5 */}
      {/* <Apis/> */}

    {/* n6 */}
      {/* <UserProfile userId={2}/> */}

    {/* n7*/}
      <Two/>
    </>
  )
}

export default App

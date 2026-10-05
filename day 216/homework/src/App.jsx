import './App.css'
import {Routes, Route} from 'react-router-dom'
// 1) ახსენი კომენტარების მეშვეობით რა არის REACT-ROUTER
// საიტის გვერდების დაკავშირების გზა
// 2) შექმენით PAGES ფოლდერი რომელსაც მიანიჭებ MAIN.JSX ფაილს შექმენი კი როუთერების მეშვეობით გახსენი მთავარზე
// 3) შექმენი FAQS.JSX ფაილი რომელსაც PATH ზე მიანიჭებთ 'faqs' 
// 4) LINK ის მეშვეობით დაკავშირე MAIN და FAQS ერთმანეთს
// 5) ჩასვი ორივე LINK ბათონში და გასტილეთ
import { Main } from './Pages/Main'
import { FAQS } from './Pages/FAQS'
function App() {

  return (
    <>
    <Routes>
      <Route index element={<Main/>}></Route>
      <Route path='/faqs' element={<FAQS/>}></Route>
    </Routes>
    </>
  )
}

export default App

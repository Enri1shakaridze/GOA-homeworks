import './App.css'
// 1) შექმენი კომპონენტი input ველით. დაამატე ღილაკი "Select Code". ღილაკზე დაჭერისას, useRef-ის გამოყენებით არამხოლოდ ფოკუსირება უნდა მოახდინოთ input ველზე, არამედ მთლიანად უნდა მონიშნოთ (select) მასში არსებული ტექსტი (.select() მეთოდის გამოყენებით).
import { Input1 } from './components/Input1'
// 2) შექმენი პაროლის შესაყვანი ველი (type="password"). დაამატე ღილაკი. useRef-ით პირდაპირ შეცვალე input-ის ტიპი: თუ არის "password", გახადე "text", ხოლო თუ არის "text", დააბრუნე "password"-ზე.
import { Passw } from './components/Passw'
// 3) შექმენი გვერდი, სადაც დაამატებთ დიდ კონტენტს. შეგიძლიათ დაამატოთ რამდენიმე სექცია: Header, About, Contacts. გვერდის თავში განათავსე ნავიგაციის ღილაკი "გადასვლა კონტაქტებში".
// გვერდის ბოლოში განათავსე <div>, რომელიც წარმოადგენს კონტაქტების სექციას.
// ღილაკზე დაჭერისას, useRef-ისა და .scrollIntoView({ behavior: 'smooth' }) მეთოდის გამოყენებით, ეკრანი უნდა ჩასქროლდეს კონტაქტების სექციამდე.
import { Bigcomp } from './components/Bigcom'
function App() {

  return (
    <>
    {/* <Input1/> */}
    {/* <Passw/> */}
    <Bigcomp/>
    </>
  )
}

export default App

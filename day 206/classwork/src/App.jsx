import { useState } from 'react'
import './App.css'
import { Product } from './components/Product'
import { HideShow } from './components/HideShow'
import { Wishlist } from './components/Wishlist'

function App() {
  const [count, setCount] = useState(0)
  // 1) შექმენით Product ომპონენტი, რომელიც მიიღებს productName და productPrice-ს. მთავარ App კომპონენტში შექმენით პროდუქტების მასივი და map()-ის გამოყენებით საიტზე გამოაჩინეთ პროდუქტების სია. (აუცილებლად მიუთუთეთ key prop-ი)
  // 2) შექმენით კომპონენტი HideText. მასში ჩასვით პარაგრაფი დიდი ტექსტით და ღილაკი. ღილაკზე დაჭერით ტექსტი ხან უნდა იმალებოდეს, ხან კი საიტზე გამოჩნდეს. ღილაკის ტექსტიც შესაბამისად უნდა იცვლებოდეს - 'hide' და 'show'

  // 3) შექმენით საიტი - საყვარელი ნივთების სია (wishlist). შექმენით კომპონენტი, სადაც მომხმარებელს შეეძლება input-ში ტექსტის ჩაწერა და 'დამატება' ღილაკზე დაჭერით ამ ნივთის სიაში დამატება. თითოეულ დამატებულ ელემენტს გვერდზე უნდს ჰქონდეს წაშლის ღილაკი, რომელიც შესაბამისად უნდა მოქმედებდეს.
  const products = [
    {
      productName: 'Banana',
      productPrice: 11
    },
    {
      productName: 'Apple',
      productPrice: 4
    },
    {
      productName: 'Orange',
      productPrice: 3
    },
    {
      productName: 'Bread',
      productPrice: 11
    },
  ]

  return (
    <>
    {/* N1 */}
      {/* <Product products={products} /> */}

    {/* N2 */}
      {/* <HideShow /> */}

    {/* N3 */}
      <Wishlist />
    </>
  )
}

export default App

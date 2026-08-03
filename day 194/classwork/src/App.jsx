import React from 'react'
import { createElement } from 'react'
import './App.css'
// import './App.css'
// // 1)  შექმენით პროდუქტების სია. (ჩაწერეთ მინიმუმ 5 პროდუქტი). გამოიყენეთ map, რომ დააგენერიროთ li ელემენტები თავისი key-ებით, რომელსაც დანომრავთ. (რათქმაუნდა თითოეულში უნდა ეწეროს თითო პროდუქტი). შედეგი დაარენდერეთ საიტზე, <ul>-ში
// function App() {

//   const products = ['banana', 'bread', 'orange', 'bluebery', 'apple']

//   const productsres = products.map((el, i) => 
//     <li key={'product_' + i}>{el}</li>
//   )
//   return (
//     <>
//     <ul>
//       {productsres}
//     </ul>
//     </>
//   )
// }

// export default App

// 2) გამოიყენეთ CreateElement მეთოდი, რომ შექმნათ მშობელი div-ი, რომელსაც classname - box ექნება, (textContent-ი არ ექნება) მასში ჩააშენეთ a თეგი, props-ად გადაეცით href და მნიშვნელობად ნებისმიერი ლინკი მიაწოდეთ, textContent გაუწერეთ Click to learn more და ამ a თეგში ჩააშენეთ ღილაკი. ღილაკს props და textContent არ გადასცეთ

// function App() {
//   const mydiv = React.createElement('div',{className:'box'}, null, React.createElement('a', {href:'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D'}, 'Click to learn more' ))
//   return (
//     <>
//       {mydiv}
//     </>
//   )
// }

// export default App

// 3) გამოიყენეთ CreateElement მეთოდი,რომ შექმნათ div-ი, რომელსაც classname - box ექნება და textContent-ად გადაეცით 'i am a div'. შემდეგ კი დაარენდერეთ საიტზე

function App() {

  const mydiv = React.createElement('div', {className:"parent"}, 'i am a div')
  return (
    <>
      {mydiv}
    </>
  )
}

export default App
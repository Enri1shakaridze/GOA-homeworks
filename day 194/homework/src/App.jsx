import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {

  // 3) შექმენით სტუდენტების სახელების მასივი (მინიმუმ 5 სტუდენტი). გამოიყენეთ .map() მეთოდი, რათა თითოეული სტუდენტისთვის დააგენერიროთ <li> ელემენტი შესაბამისი key ატრიბუტით. შედეგი დაარენდერეთ საიტზე <ul> თეგში.

  // const st = ['enrike', 'sandro', 'saba', 'temo', 'irakli']
  // const resst = st.map((el, index) => 
  //   <li key={'student_' + index}>{el}</li>
  // );

  // 4) React.createElement-ით შექმენით მშობელი div კლასით "card". ამ div-ში ჩააშენეთ ორი შვილი ელემენტი:
  // • h2 თეგი ტექსტით: "Card Title"
  // • p თეგი ტექსტით: "This is a card description."
  // შედეგი დაარენდერეთ საიტზე.

  // const elm = React.createElement('div', {className:'card' }, null, React.createElement('h2', null, 'Card Title'), React.createElement('p', null, 'This is a card description'))

  // 5) შექმენით ნავიგაციის ბმულების მასივი (მაგალითად: ["Home", "About", "Services", "Contact"]). გამოიყენეთ .map(), რომ თითოეული დასახელებისთვის შექმნათ <a> თეგი React.createElement-ის გამოყენებით.
  // გადაეცით key ატრიბუტი.
  // გადაეცით href="#" პროპსი.
  // textContent-ად მიუთითეთ შესაბამისი სახელი.
  // ყველა ბმული დაარენდერეთ nav თეგში.

  // const links = ["Home", "About", "Services", "Contact"]
  // let res = links.map((el, index) => 
  //   React.createElement('a', {key:'link_' + index, href:'#'}, el)
  // );

  // 6) React.createElement-ით შექმენით მშობელი div კლასით "image-container". მასში ჩააშენეთ:
  // img თეგი, რომელსაც props-ად გადასცემთ src (ნებისმიერი სურათის ლინკი) და alt ატრიბუტებს.
  // button თეგი, რომლის textContent იქნება "View Image".

  // const img = React.createElement('img', {src:'image.png'}, null)
  // const btn = React.createElement('btn', null, 'View Image')
  // const crdv = React.createElement('div', {className:'image-container'}, null, img, btn)

  return (
    <>
    {/* N 1 */}
    {/* <div>
      <ul>
        {resst}
      </ul>
    </div> */}

    {/* N 2 */}
    {/* <div>
      {elm}
    </div> */}

    {/* N 3 */}
    {/* <nav>
      {res}
    </nav> */}

    {/* N 4 */}
    {/* <div>
      {crdv}
    </div> */}
    </>
  )
}

export default App

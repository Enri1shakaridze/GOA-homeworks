import { useState } from 'react'
import './App.css'

// 2) შექმენით ობიექტი, რომელშიც შეინახავთ ფოტოს მისამართებს (src). საიტზე დაამატეთ სამი img ელემენტი, რომელთაც ამ ობიექტიდან მიაწვდით src ატრიბუტის მნიშვნელობებს. (მაგ. imgObj.img1). ფოტოებს მიეცით className და გასტილეთ css-ში.

// 3) h1 თეგში ჩაწერეთ სიმბოლო π. მასზე მაუსის გადატარებისას π სიმბოლოს მაგივრად პის პირველი 10 ციფრი უნდა გამოჩნდეს.

// 4) შექმენით ობიექტი cardData, რომელშიც შეინახავთ ინფორმაციას პროდუქტის/ბარათის შესახებ:
// imgSrc – ფოტოს ლინკი
// title – სათაური
// description – მოკლე აღწერა
// JSX-ში გამოიყენეთ ეს ობიექტი და გამოიტანეთ ბარათი (<div> ელემენტი).img თეგს src და alt ატრიბუტები მიაწოდეთ ობიექტიდან (მაგ. cardData.imgSrc). ელემენტებს მიანიჭეთ className-ები და CSS-ში გასტილეთ.


function App() {
  // hv n1
  // const objsrc = [
  //   {
  //     src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPx8gL7wGhdiy3Ic9mZTFKwUKA7j1O20n2FHyspPsabLPA9z83D44cpciR&s=10'
  //   },
  //   {
  //     src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
  //   },
  //   {
  //     src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
  //   }
  // ]
  // ----------------------------------------------------------
  // hw n2 
  // function mainn(e) {
  //   e.target.textContent = Math.PI.toFixed(10)
  // }


  // hv n3 
  const cardData = {
    img: 'https://www.emiratesnbd.com/-/media/enbd/images/products/cards/credit-cards/new-cards-images/mastercard-platinum_card_image.png?la=en&h=556&w=880&hash=511FC2697F3FCB0BF682131BDF46F436',
    name: 'Enrike shakaridze',
    cardnumber: '1234 4567 8910 9876',
    cv: '123'
  }

  return (
    <>
      {/* hw n1 */}
      {/* <div className='div'>
        <img className='images' src={objsrc[0].src} alt="" />
        <img className='images' src={objsrc[1].src} alt="" />
        <img className='images' src={objsrc[2].src} alt="" />
      </div> */}
      {/* -------------------------------------------------- */}

      {/* hw n2 */}
      {/* <h1 onMouseOver={mainn}>π</h1> */}
      {/* ------------------------------------------------- */}

      {/* hv n3 */}

      <div className='cardus'>
        <img src={cardData.img} alt="mastercard" />
        <h1 className='h11'>{cardData.name}</h1>
        <div className='dspf'>
          <h3 className='h33'>{cardData.cardnumber}</h3>
          <h3 className='h32'>{cardData.cv}</h3>
        </div>
      </div>
    </>
  )
}

export default App

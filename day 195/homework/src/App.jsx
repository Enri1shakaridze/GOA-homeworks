import './App.css'
// 2) შექმენი კომპონენტი, რომელიც აბრუნებს 'React is cool'-ს. დააექსპორტე და დაარენდერე საიტზე.

import { ReactCool } from './components/ReactCool'

// 3) შექმენი კომპონენტი, რომელიც მომხმარებელს მიესალმება ('Hello, User!') 5-ჯერ.

import { HelloUser } from './components/Hello'

// 4) შენი სიტყვებით ახსენი, თუ რა არის კომპონენტი და როგორ ვიყენებთ მას React-ში.

// 5) მოიძიე 5 საიტი, რომელიც React-ითაა აწყობილი. (უმჯობესია იყოს ცნობილი კომპანიის). ასევე, საიტის პოვნის შემეგ იმსჯელე თუ საიტი როგორ შეიძლება იყოს დაყოფილი კომპონენტებად.
function App() {

  return (
    <>
    {/* N 1 */}
      {/* <div>
        <ReactCool />
      </div> */}

      {/* N 2 */}
      {/* <div>
        <HelloUser />
        <HelloUser />
        <HelloUser />
        <HelloUser />
        <HelloUser />
      </div> */}

      {/* N 3 */}
      {/* კომპონენტი არის ცალკეულად დაყოფილი ელემენტი რომელიც შეიცავს ინფორმაციებს გვაქვს სამი ძირითადი კომპონენტი header, main, footer რომლებიც ასევე შედგება პატარა კომპონენტებისაგან */}

      {/* N 4 */}
      {/* Alta, Zoomer, Figma, Codecademy, Github */}
    </>
  )
}

export default App

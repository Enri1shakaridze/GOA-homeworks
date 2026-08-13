
import './App.css'
// 2) შექმენით კომპონენტი UserStatus, რომელიც props-ით იღებს ცვლადს isOnline. თუ isOnline === true, გამოაჩინეთ მწვანე ტექსტი ან იკონკა: "მომხმარებელი არის Online". თუ isOnline === false, გამოაჩინეთ წითელი ტექსტი: "მომხმარებელი არის Offline".
import { UserStatus } from './components/UseStatus'
// 3) შექმენით კომპონენტი ProductCard, რომელიც props-ით იღებს შემდეგ მონაცემებს: title, price და hasDiscount (boolean). შექმენით კომპონენტი ProductCard, რომელიც props-ით იღებს შემდეგ მონაცემებს: title, price და hasDiscount (boolean). თუ hasDiscount === true, ფასის გვერდით გამოაჩინეთ ტექსტი: "Sale!" (მწვანე ფერით). თუ hasDiscount === false, ეს ტექსტი არ უნდა გამოჩნდეს.
import { ProductCard } from './components/ProductCard'
// 4) შექმენით კომპონენტი UserList, რომელიც props-ით იღებს მომხმარებლების მასივს:
const userss = [
  { id: 1, name: "გიორგი", avatar: "https://via.placeholder.com/50" },
  { id: 2, name: "ნინო", avatar: "https://via.placeholder.com/50" },
  { id: 3, name: "ანა", avatar: "https://via.placeholder.com/50" }
];

import { Users } from './components/Userlist'

// .map() მეთოდის გამოყენებით დაარენდერეთ თითოეული მომხმარებელი <li> ტეგში (გამოაჩინეთ ფოტო და სახელი).
// აუცილებლად დაამატეთ key ატრიბუტი .map()-ში.

// 5) ექმენით კომპონენტი AlertButton, რომელიც props-ით იღებს ტექსტს message და ღილაკის სახელს buttonText. კომპონენტში დაარენდერეთ ღილაკი buttonText. ღილაკზე დაკლიკებისას (onClick) გამოიძახეთ ბრაუზერის სტანდარტული alert(message).

import { Alerts } from './components/Alert';

// 6) შექმენი კომპონენტი Avatar – რომელიც აბრუნებს მომხმარებლის ფოტოს (<img>).
// ასევე შექმენი კომპნენტი UserInfo – რომელიც აბრუნებს მომხმარებლის სახელსა და ელფოსტას (<h2> და <p>).
// შექმენი მთავარი კომპონენტი UserProfile, რომელიც შიგნით აბრუნებს Avatar და UserInfo კომპონენტებს, გაერთიანებულს ერთ div-ში.
import { Resmain } from './components/MainAvatar';
// 7) შექმენი კომპონენტი PriceTag, რომელიც იღებს price prop-ს და აბრუნებს ფასს (<span> თეგით).
// შექმენი კომპონენტი ProductCard, რომელიც თავის შიგნით აბრუნებს PriceTag კომპონენტს და გადასცემს მას კონკრეტულ ფასს.
// მთავარ App კომპონენტში გამოაჩინე ProductCard.
import { ResPrices } from './components/Resprice';
function App() {
  console.log(userss)
  return (
    <>
    {/* N 1 */}
    {/* <UserStatus status={true} /> */}

    {/* N 2 */}
    {/* <ProductCard title={'random'} price={100} hasDiscount={true} /> */}

    {/* N 3 */}
    {/* <Users arr={userss} /> */}

    {/* N 4 */}
    {/* <Alerts /> */}

    {/* N 5 */}
    {/* <Resmain imgs2={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjxGIAcQZkJNPB-maQVSMm563UlHp3dxnGmenq_wh4tgg5zXWx6xDDUP1&s=10'} mails={'enrike2@gmail.com'} names={'enrike'} /> */}

    {/* N 6 */}
    <ResPrices  prices2={100}/>
    </>
  )
}

export default App

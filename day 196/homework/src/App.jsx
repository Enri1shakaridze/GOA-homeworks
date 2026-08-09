import './App.css'

// 1) შექმენი კომპონენტი UserCard. გადაეცი props-ები name, age, avatarUrl, isAdmin(boolean). 
// გამოაჩინე მომხმარებლის სახელი, ასაკი და ფოტო. თუ isAdmin არის true, ბარათზე გამოაჩინე პატარა ტექსტი წარწერით "Admin".
import { Card } from './components/UserCard'
// 2) შექმენი კომპონენტი ProductPrice. გადაეცი props-ები originalPrice და discountPercent. კომპონენტმა შიგნით გამოითვალოს საბოლოო ფასი და გამოაჩინოს ძველი ფასი გადახაზულად, ხოლო ახალი ფასი მწვანე ფერით. 
import { ProductPrice } from './components/ProductPrice'
// 3) შექმენი ProfileGallery კომპონენტი, რომელიც props-ით იღებს მომხმარებლების მასივს (users). გადაეცი props-ი  users (ობიექტების მასივი, სადაც თითოეულს აქვს id, name, age, avatarUrl, isAdmin). გადაუარე users მასივს .map() მეთოდით და თითოეულისთვის დარენდერე პირველ დავალებაში შექმნილი UserCard (არ დაგავიწყდეს key prop-ის მითითება).

const users = [
  {
    id: 1,
    name: 'enrike',
    isAdmin: true,
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8_cf44FNFfEUiIiU80iYS57JD5oZmHyG0uXKoXl6N4_u0j3HtXrph4M&s=10',
    age: 15
  },
  {
    id: 2,
    name: 'temo',
    isAdmin: true,
    avatarUrl: 'https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww',
    age: 11
  },
  {
    id: 3,
    name: 'saba',
    isAdmin: false,
    avatarUrl: 'https://s3.me-central-1.amazonaws.com/com.insurancemarket.wp/2024/06/image-125-40.jpg',
    age: 25
  }
]
import { ProfileGallery } from './components/ProfileGallery'
// 4) შექმენი კომპონენტი RatingStars. გადაეცი props-ი rating (რიცხვი 1-დან 5-მდე). გადაცემული რიცხვის მიხედვით გამოაჩინე შევსებული (★) და ცარიელი (☆) ვარსკვლავები. მაგალითად, თუ rating={3}, უნდა გამოჩნდეს: ★★★☆☆.
import { RatingStars } from './components/RatingStars'
function App() {

  return (
    <>
    {/* N 1 */}
      {/* <div>
        <Card name={'Enrike'} age={15} avatarUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13e3LqaYjoH2gBbakhQvlftCT_3t19vMgGBPjCm7Uq9GzwrKd1QEb0dc&s=10'} isAdmin={true} />
      </div> */}

    {/*  N 2 */}
      {/* <div>
        <ProductPrice discountPercent={150} originalPrice={200} />
      </div> */}

    {/* N 3 */}
      {/* <div id='cont'>
        <ProfileGallery Users={users} />
      </div> */}

    {/* N 4 */}
        <div>
          <RatingStars rating={4} />
        </div>
    </>
  )
}

export default App

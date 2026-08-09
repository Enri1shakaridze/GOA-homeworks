import './App.css'
// 1) 
// შექმენით მასივი, რომელსაც დაარქმევთ 'bookLibrary'-ს. მასში ობიექტის სახით გქონდეთ ჩაწერილი ავტორის სახელი, წიგნის title და წიგნის ფოტო. ამ მასივში მინიმუმ 5 ასეთი ობიექტი უნდა ჩასვათ. 
// ცალკე ფაილში შექმენით კომპონენტი, რომელიც წიგნის სახელს, ავტორსა და ფოტოს გამოიტანს props-ების მეშვეობით. main ფაილში გადაუარეთ შექმნილ მასივ bookLibrary-ს map-ით და დაარენდერეთ ხუთივე წიგნი საიტზე. მაქსიმალურად დახვეწილად გასტილეთ.
import { Book } from './components/Books'
function App() {
  const Booklibrary = [
    {
      author: 'random 1',
      title: 'The Book of Random',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnc44rvirMN4dVDzyiqMjHAgfKXPAUYgiK5aBxJ1JUIA&s=10'
    },
    {
      author: 'random 2',
      title: 'Middle Grade ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVmfV9Cq1MI3h7y_vXL9QbuCHMPiXKncDe9OFxU4jXA&s=10'
    },
    {
      author: 'random 3',
      title: 'Books – Occasionally',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRThxWq5BxcMNy5dyawpcccgUGollDwxwjP1H1g3poXipXoumRwHYis5c&s=10'
    },
    {
      author: 'random 4',
      title: 'Random in Death',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9szL0mllTWRLhQ9GNNalYz5Hcg-H-G5sqHEhtzQ3m-AT7OdQRTZnhVjk&s=10'
    },
    {
      author: 'random 5',
      title: 'Science Fiction - dicegeeks',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLz8M4j5cHdKLJf--l_wHmvY7I34VQCiNVvKiiyXRGuLipKDT_UiO85g4&s=10'
    },
  ]
  return (
    <>
    <div className='resss'>
      <Book Booklibrary={Booklibrary} />
    </div>
    </>
  )
}

export default App

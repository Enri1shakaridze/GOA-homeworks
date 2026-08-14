import './App.css'
// შქმენით MovieImg კომპონენტი, რომელიც დააბრუნებ ფილმის ფოტოს. ასევე შექმენით MovieDesc, სადაც ფილმის შესახებ description-ი იქნება მოცემული. (title, year, rating). ეს ორივე კომპონენტი გააერთიანეთ MovieCard კომპონენტში და ეკრანზე გამოაჩინეთ დივის სახით. MovieCard-ს დაუმატეთ Add To Favorites ღილაკი, რომელზე დაკლიკებამაც უნდა გამოიძახოს alert-ი, რომელიც გამოიტანს - 'ფილმი წარმატებით დაემატა ფავორიტებში'. 
import { Movie } from './components/Movie'

function App() {

  return (
    <>
      <Movie imgUrl={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFRyhoXHg0ew-I3T-5Qg6pEW7KlmEieUiKRF_jiaqmQ&s=10'} title={'Prison Break'} year={2008} rating={10.0} />
    </>
  )
}

export default App

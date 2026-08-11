import './App.css'
// 1) შექმენით კომპონენტი და მასში დაამატეთ პირობა: თუ ცვლადი fiftyFifty => True იქნება კომპონენტში დაარენდერეთ კატის ფოტო, ხოლო თუ False იქნება დაარენდერეთ ძაღლის ფოტო
// 2)  შექმენით კომპონენტი და მასში დაამატეთ EventHandler-ი. (handleClick). ღილაკზე დაკლიკებისას მისი background ფერი უნდა გახდეს წითელი და ღილაკი ზომაში გაიზარდოს.
import { Clickbtn } from './components/Clickbg'
import { DogOrCat } from './components/DogOrCat'

function App() {

  return (
    <>
      <DogOrCat />
      {/* <Clickbtn /> */}
    </>
  )
}

export default App

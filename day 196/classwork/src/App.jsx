import './App.css'
import { Card } from './components/Card'
import { Header } from './components/header'
// 1) საყუდლების საიტისთვის შექმენით ორი კომპონენტი: header და პროდუქტის card-ი.
// header-ში დაამატეთ საიტის სახელი, ნავიგაციის ლინკები და cart ფოტო. card-ში კი უნდა იყოს პროდუქტის დასახელება, ფოტო, description და Buy now ღილაკი. საიტზე 5 სხვადასხვა პროდუქტი დაარენდერეთ. ორივე ერთ საიტზე დაარენდერეთ.

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="cont">
          <Card Imgs={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVa4WP_w2gk4EDgEktKVl39Y9ZARscntMHU5yJqtmvTw&s=10'} desc={'This is desc'}/>
        </div>
        <div className="cont">
          <Card Imgs={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cT0GYzcgNjkDbIZZ--fBc0uNb6gdvEXT5dMVsNIJ_vW6aA7nrjbCq8Y&s=10'} desc={'This is desc'}/>
        </div>
        <div className="cont">
          <Card Imgs={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjMA8ilnUWhjEMUtAEuokcvekSnzetd8d_U_kjYDl7oAsK1x30k_fuX0&s=10'} desc={'This is desc'}/>
        </div>
        <div className="cont">
          <Card Imgs={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8o93LgHevvdmGQ2WgV_2ZB1JZUdwUD4L9rqDlvOfpQIR0kW3do6aMWdM&s=10'} desc={'This is desc'}/>
        </div>
        <div className="cont">
          <Card Imgs={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Oyq73StyZggDkoegvYhyb24epDpXBnzgIu3xv3RWiIgG-x5zTfYO8kei&s=10'} desc={'This is desc'}/>
        </div>
      </main>
    </>
  )
}

export default App

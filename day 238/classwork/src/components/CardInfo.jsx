import { useEffect, useState } from 'react'
// შექმენით ვებსაიტი სახელწოდებით Card Info, სადაც გექნებათ სამი ინფუთი: Card Number, Expiration Date და CVV.
// input ველების ქვემოთ h2 თეგებში გამოიტანეთ ეტაპობრივად ამ ველებში შეყვანილი ინფორმაცია. (გამოიყენეთ onChange მოვლენის მსმენელი და useState)
export function CardInfo() {
    const [Card, setCard] = useState('')
    const [Date, setDate] = useState('')
    const [CVV, setCVV] = useState('')

    useEffect(()=>{
        if(CVV.length !== 3){
            document.getElementById('p1').textContent = 'CVV უნდა შედგებოდეს 3 ციფრისგან!!!'
            document.getElementById('inp3').style.border = '1px solid red'
        }else{
            document.getElementById('p1').textContent = ''
            document.getElementById('inp3').style.border = '1px solid blue'
        }
        
    },[CVV])
    useEffect(()=>{
        if(Card.length !== 16){
            document.getElementById('p2').textContent = 'Card უნდა შეიცავდეს 16 ციფრს!!!'
            document.getElementById('inp1').style.border = '1px solid red'

        }else{
            document.getElementById('p2').textContent = ''
            document.getElementById('inp1').style.border = '1px solid blue'

        }
        
    },[Card])
    useEffect(()=>{
        if(Date.length !== 5){
            document.getElementById('p3').textContent = 'შეიყვანეთ ესეთ ფორმატში "01/01" !!!'
            document.getElementById('inp2').style.border = '1px solid red'

        }else{
            document.getElementById('p3').textContent = ''
            document.getElementById('inp2').style.border = '1px solid blue'

        }
        
    },[Date])

    return (
        <>
            <input onChange={(e) => setCard(e.target.value)} value={Card} type="text" name="" id="inp1" placeholder='Card Number' />
            <p className='par' id='p2'></p>
            <input onChange={(e) => setDate(e.target.value)} value={Date} type="text" name="" id="inp2" placeholder='Expiration Date' />
            <p className='par' id='p3'></p>
            <input onChange={(e) => setCVV(e.target.value)} value={CVV} type="text" name="" id="inp3" placeholder='CVV' />
            <p className='par' id='p1'></p>

            <h2>Card NUmber: {Card}</h2>
            <h2>Expiration Date: {Date}</h2>
            <h2>CVV: {CVV}</h2>
        </>
    )
}


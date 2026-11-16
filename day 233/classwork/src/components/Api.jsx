import { useEffect, useState } from "react";
export function Fakeapi(){

    const [datas, setdatas] = useState([])

    useEffect(()=> {
        async function APIS() {
            let response = await fetch('https://wttr.in/Tbilisi?format=j1')
            let data = await response.json()
            setdatas([data])
            console.log(data)
        }
        APIS()
    }, [])

    let res = datas.map((x, y)=>{
        console.log(datas)
        return (
            <div key={y}>
                <h1>cloudcover {datas[0].current_condition[0].cloudcover}</h1>
                <h1>windspeedKmph {datas[0].current_condition[0].windspeedKmph}</h1>
                <h1>Temperature celsius {datas[0].weather[0].avgtempC}</h1>

            </div>
        )
    })

    return (
        <div>
            {res}
        </div>
    )

}
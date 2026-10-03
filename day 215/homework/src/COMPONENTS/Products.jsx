import { useState, useEffect } from "react";

function Product() {
    const [prod, setprod] = useState([])
    const [src, setsrc] = useState('')


    useEffect(() => {
        fetch('https://dummyjson.com/products').then((resolve) => resolve.json()).then((data) => {
            setprod(data.products)
            console.log(data)
        }).catch((err) => console.log(err))
    }, [])

    function clicked() {
        let inp = document.getElementById('inp').value
        setsrc(inp)
    }

    let res = prod.filter((el) => el.title.toLowerCase().includes(src.toLowerCase())).map((el) => (
            <div key={el.id}>
                <h1>{el.title}</h1>
                <img src={el.thumbnail} alt={el.title} />
            </div>
        ));

    return (
        <div>
            <input type="text" name="" id="inp" />
            <button onClick={clicked}>search</button>
            {res}
        </div>
    )
}
export { Product }
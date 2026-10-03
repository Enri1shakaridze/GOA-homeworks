import { useState, useEffect } from "react";

function Ids() {
    const [prod, setprod] = useState([])
    const [src, setsrc] = useState(1)


    useEffect(() => {
        async function Ft() {
            try {
                let resolve = await fetch('https://dummyjson.com/products')
                let data = await resolve.json()
                setprod(data.products)
                console.log(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        Ft();
        return () => setprod([])
    }, [])

    function clicked() {
        let inp = document.getElementById('inp').value
        setsrc(Number(inp))
    }

    let res = prod.filter((el) => el.id === src).map((el) => (
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
export { Ids }
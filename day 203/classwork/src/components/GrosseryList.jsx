import { useState } from "react";

function GrosseryList(){
    const [cart, setCart] = useState([
        {
            id: 100,
            NameProduct: 'apple' 
        },
        {
            id: 201,
            NameProduct: 'orange' 
        },
        {
            id: 301,
            NameProduct: 'cherry' 
        }
    ])
    function remove(removeId) {
        setCart((prew) => prew.filter((x) => x.id !== removeId))
    }

    let res = cart.map((el, index) => 
        <li key={el.id}>
            {el.NameProduct}
            <button className={'product_' + el.id} onClick={() => remove(el.id)}>delete</button>
        </li>
    )

    return (
        <ul>
            {res}
        </ul>
    )

}
export {GrosseryList}
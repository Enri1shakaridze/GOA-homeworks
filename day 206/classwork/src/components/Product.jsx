function Product({products}){
    let res = products.map((el, index) => 
        <div className="divname" key={'Product_' + index}>
            <li>{el.productName}</li>
            <p>Price: {el.productPrice}</p>
        </div>
    )
    
    return (
        <div>
            <ul>
                {res}
            </ul>
        </div>
    )
}
export {Product}
function ProductPrice({originalPrice, discountPercent}){
    let res = originalPrice - (originalPrice * discountPercent) / 100
    return (
        <div>
            <h1 id='redd'>{originalPrice}</h1>
            <h1 id='greenn'>{res}</h1>
        </div>
    )
}
export {ProductPrice}
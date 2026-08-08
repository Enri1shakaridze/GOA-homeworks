function ProductPrice({originalPrice, discountPercent}){
    return (
        <div>
            <h1 id='redd'>{originalPrice}</h1>
            <h1 id='greenn'>{discountPercent}</h1>
        </div>
    )
}
export {ProductPrice}
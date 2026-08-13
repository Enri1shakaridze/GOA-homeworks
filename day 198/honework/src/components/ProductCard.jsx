function ProductCard({title, price, hasDiscount}){
    let test;
    if(hasDiscount){
        test = <h1>Sale!</h1>
    }else{
        test = ''
    }

    return (
        <div>
            <h1>{title}</h1>
            <h1>{price}</h1>;
            <h1>{test}</h1>
        </div>
    )
}
export {ProductCard}
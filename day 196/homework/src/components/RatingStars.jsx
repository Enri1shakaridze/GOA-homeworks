function RatingStars({rating}){
    let res = ''
    for(let i = 1; i <= 5; i++){
        if(i <= rating){
            res+= '★'
        }else{
            res+= '☆'
        }
    };
    return (
        <div>
            {res}
        </div>
    )
}
export {RatingStars}
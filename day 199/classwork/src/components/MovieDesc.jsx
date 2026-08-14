
function MovieDesc({title, year, rating}){
    return (
        <div>
            <h1>{title}</h1>
            <h3>{year}</h3>
            <h2>⭐ {rating}</h2>
        </div>
    )
}
export {MovieDesc}
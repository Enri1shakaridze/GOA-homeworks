import { MovieDesc } from "./MovieDesc";
import { MovieImg } from "./MovieImg";

function Movie({imgUrl, title, year, rating}){
    function alerts(){
        alert('this is a alert')
    }
    return (
        <div>
            <MovieImg imgusr={imgUrl} />
            <MovieDesc title={title} year={year} rating={rating} />
            <button onClick={alerts}>Add Favorite</button>
        </div>
    )
}
export {Movie}
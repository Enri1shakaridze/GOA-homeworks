function Card({Imgs, desc}){
    return (
        <div>
            <img src={Imgs} alt="" />
            <p>{desc}</p>
            <button>Buy now</button>
        </div>
    )
}
export {Card}
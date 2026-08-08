function Card({name, age, avatarUrl, isAdmin}){
    return (
        <div>
            <img src={avatarUrl} alt="" />
            <h1>{isAdmin? 'admin': ''}</h1>
            <h3>{name}</h3>
            <h3>{age}</h3>
        </div>
    )
}
export {Card}
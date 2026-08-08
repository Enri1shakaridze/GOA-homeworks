function ProfileGallery({Users}){
    let res = Users.map((el, index) => 
        <div key={'User_' + index}>
            <img src={el.avatarUrl} alt="" />
            <h1>{el.isAdmin? 'admin': ''}</h1>
            <h3>{el.name}</h3>
            <h3>{el.age}</h3>
        </div>
    )
    return(
        <div>
            {res}
        </div>
    )
}
export {ProfileGallery}
function Users({arr}){
    let res = arr.map((el, index) => 
        <ul key={'user_' + index}>
            <li>{el.name}</li>
            <img src={el.avatar} />
        </ul>
    )
    return (
        <div>{res}</div>
    )
}

export {Users}
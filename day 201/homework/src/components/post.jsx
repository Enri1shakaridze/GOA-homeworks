function Post({ posts }) {
    function clicked (e){
        e.target.src ===  "https://cdn-icons-png.flaticon.com/512/10307/10307920.png" ? e.target.src = 'https://cdn-icons-png.flaticon.com/512/6932/6932458.png' : e.target.src = 'https://cdn-icons-png.flaticon.com/512/10307/10307920.png'
        e.target.src ===  "https://cdn-icons-png.flaticon.com/512/10307/10307920.png" ? e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) - 1: e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) + 1;
    }
    let res = posts.map((el, x) => {
        return (
            <div className="divs1" key={'post_' + x}>
                <img src={el.imgs} alt="" />
                <p>{el.text}</p>
                <div>
                    <img onClick={clicked} id="imgss" src={el.like === false ? 'https://cdn-icons-png.flaticon.com/512/10307/10307920.png' : 'https://cdn-icons-png.flaticon.com/512/6932/6932458.png'} alt="" />
                    <p>{el.liken}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="allpost">
            {res}
        </div>
    )
}
export { Post }
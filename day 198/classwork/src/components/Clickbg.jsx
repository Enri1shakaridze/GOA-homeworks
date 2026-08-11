function Clickbtn(){
    function clicked(e){
        e.target.id = 'fontss'
        document.querySelector('body').className = 'redds'
    }
    return <button onClick={clicked}>Click</button>
}
export {Clickbtn}
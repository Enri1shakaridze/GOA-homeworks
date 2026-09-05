function HideShow(){

    function hides(e){
        e.target.textContent === 'Hide' ? e.target.textContent = 'Show':e.target.textContent = 'Hide';
        let p = document.getElementById('texts')
        p.textContent.length !== 0? p.textContent = '' : p.textContent = 'Text'
    }

    return (
        <div>
            <p id="texts">Text</p>
            <button onClick={hides}>Hide</button>
        </div>
    )
}
export {HideShow}
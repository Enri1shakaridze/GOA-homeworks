function FAQ(){
    let array = [
        {
            question: 'Why is the moon sometimes out during the day',
            ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto natus, sapiente deleniti debitis placeat facilis',
        },
        {
            question: 'why is sky blue?',
            ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto natus, sapiente deleniti debitis placeat facilis',
        },
        {
            question: 'how much does the earth weight?',
            ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto natus, sapiente deleniti debitis placeat facilis',
        },
        {
            question: 'will we ever discover aliens?',
            ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto natus, sapiente deleniti debitis placeat facilis',
        }
    ]
    function heandler(e){
        console.log(e.target.parentElement.nextElementSibling)
        if(e.target.parentElement.nextElementSibling.id === 'ps2'){
            e.target.parentElement.nextElementSibling.id = 'ps1'
            e.target.textContent = '+'
        }else{

            e.target.parentElement.nextElementSibling.id = 'ps2'
            e.target.textContent = '-'
        }
    }

    let res = array.map((el, index) => 
        <div id="box">
            <div className={"flexx"} key={'question_' + index}>
                <p>{el.question}</p>
                <button onClick={heandler}>+</button>
            </div>
            <p className="ps">{el.ans}</p>
        </div>
    )

    return (
        <div id="mainbox">
            <h1>Frequently Asked questions</h1>
            <div className="mains">
                {res}
            </div>
        </div>
    )
}
export {FAQ}
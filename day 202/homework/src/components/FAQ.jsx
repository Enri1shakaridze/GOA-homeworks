import { useState } from "react"


function FAQ(){
    const [ans, setAns] = useState([])
    let array = [
        {
            id: 1,
            question: 'Why is the moon sometimes out during the day',
            ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto natus, sapiente deleniti debitis placeat facilis',
        },
        {
            id: 2,
            question: 'why is sky blue?',
            ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto natus, sapiente deleniti debitis placeat facilis',
        },
        {
            id: 3,
            question: 'how much does the earth weight?',
            ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto natus, sapiente deleniti debitis placeat facilis',
        },
        {
            id: 4,
            question: 'will we ever discover aliens?',
            ans: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae architecto natus, sapiente deleniti debitis placeat facilis',
        }
    ]
    function heandler(id){
        let btnId = id
        btnId = Number(btnId)
        if(ans.includes(btnId)){
            setAns(ans.filter((x) => x !== btnId))
        }else{
            setAns((item) => [...item, btnId])
        }
    }

    let res = array.map((el, index) => 
        <div id="box" key={'question_' + index}>
            <div className={"flexx"} >
                <p>{el.question}</p>
                <button onClick={() => heandler(el.id)}>{ans.includes(el.id) ? '-' : '+'}</button>
            </div>
            <p className="ps">{ans.includes(el.id) ? el.ans : ''}</p>
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
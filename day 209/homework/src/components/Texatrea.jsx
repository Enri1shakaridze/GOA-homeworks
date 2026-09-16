import {useState,  useEffect } from "react"
function Texatrea(){
    const [text, setText] = useState('')

    useEffect(() => {
        if(text.length >= 50){
            alert('Max limit 50 Letter!')
            document.getElementById('z').value = document.getElementById('z').value.slice(0, 51)
        }
    }, [text])
    function change(e){
        setText(e.target.value)
    }
    return (
        <div>
            <textarea onChange={change} name="" id="z">{text}</textarea>
        </div>
    )
}
export {Texatrea}
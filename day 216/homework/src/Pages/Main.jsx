import React from "react";
import {Link} from 'react-router-dom'

function Main(){
    return (
        <div>
            <h1>Hello</h1>
            <button><Link to='/faqs'>FAQS</Link></button>
        </div>
    )
}
export {Main}
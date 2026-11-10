import { useState } from "react"
import Trash from 'lucide-react/icons/trash';
import Check from 'lucide-react/icons/check';

export function ToDoList() {

    const [arr, setarr] = useState([])
    const [a, seta] = useState('')

    function heandler(e) {
        console.log(1)
        if (e.target.previousElementSibling.value !== '') {
            setarr((items) => [...items, { id: arr.length + 1, text: e.target.previousElementSibling.value, Pends: 'Pending' }])
        }
    }

    function Delete(e) {
        setarr(arr.filter((x) => x.id !== Number(e.target.parentElement.parentElement.children[0].children[0].className)))
    }

    function heandler2(e) {
        if (e.target.parentElement.parentElement.nextElementSibling.textContent === 'Pending') {
            const id = Number(
                e.target.parentElement.parentElement.children[0].children[0].className
            );

            setarr((items) => items.map((x) => {
                if (x.id === id) {
                    return {
                        ...x,
                        Pends: 'Complected'
                    };
                }
                return x;
            }));
        }
    }


    return (
        <div className="rootss">
            <div className="main">
                <div className="info">
                    <input type="text" />
                    <button onClick={heandler} id="add">Add List</button>
                </div>
                <div className="result">

                    {
                        arr.map((x, index) => {
                            if (x.Pends.includes(a)) {
                                return (<div key={'List_' + index}>
                                    <div className="first">
                                        <div className="f1">
                                            <p className={x.id} id="passed">{x.text}</p>
                                        </div>
                                        <div className="f2">
                                            <Check id="ch" onClick={heandler2} />
                                            <Trash onClick={Delete} />
                                        </div>
                                    </div>
                                    <p>{x.Pends}</p>
                                </div>)
                            }
                        })}
                </div>
                <div>
                </div>
                <div className="btnss">
                    <button onClick={() => seta('Pending')} className="clss">Pending</button>
                    <button onClick={() => seta('')} className="clss">All Tasks</button>
                    <button onClick={() => seta('Complected')} className="clss">Complected</button>

                </div>
                <p>სულ {arr.length}</p>
            </div>
        </div>
    )
}

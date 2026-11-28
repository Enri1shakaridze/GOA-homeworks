import { useState, useEffect } from "react"

export function Buy() {
    const [select, setselect] = useState('კურიერი')
    const [radio, setradio] = useState('')
    const [cxh, setcxh] = useState('')
    const [disabled, setdisabled] = useState(false)
    useEffect(() => {
        setcxh(disabled ? 'white' : 'grey')
        console.log(cxh)
    }, [disabled])
    useEffect(() => {
        console.log(radio)
    }, [radio])
    useEffect(() => {
        console.log(select)
    }, [select])
    function hendler() {
        if (cxh !== 'white') {
            return
        }
        if (radio === '') {
            return alert('აირჩიეთ გადახდის ტიპი!')
        }
        setradio('')
        setdisabled(false)
        alert('წარმატებით დადასტურდა!')
        return window.location.reload();

    }
    return (
        <div className="mainc">
            <div className="cont">
                <h2>მიწოდების ტიპი</h2>
                <select onChange={(e) => setselect(e.target.value)} name="" id="">
                    <option value="კურიერი">კურიერი</option>
                    <option value="ფილიალიდან გატანა">ფილიალიდან გატანა</option>
                </select>
                <h2>გადახდა</h2>
                <div>
                    <label htmlFor="barati">ბარათი</label>
                    <input onChange={(e) => setradio(e.target.value)} type="radio" name="pay" value='ბარათი' id="barati" />
                </div>
                <div>
                    <label htmlFor="nagdi">ნაღდი</label>
                    <input onChange={(e) => setradio(e.target.value)} type="radio" name="pay" value='ნაღდი' id="nagdi" />
                </div>
                <h2 style={{ marginTop: '20px' }}>წესები და პირობები</h2>
                <div>
                    <input onChange={() => setdisabled(!disabled)} style={{ display: 'inline' }} type="checkbox" name="" id="cx" />
                    <label style={{ display: 'inline', marginLeft: '20px' }} htmlFor="cx">ვეთანხმები წესებსა და პირობებს</label>
                </div>
                <button onClick={hendler} style={{ background: cxh }}>დადასტურება</button>
            </div>
        </div>
    )
}
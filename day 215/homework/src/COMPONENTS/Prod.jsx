import { useState, useEffect } from 'react';

export default function Products2(){
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    )

    const [products, setProducts] = useState([]);

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    const handleClick = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light')
    }
    let res = products.map((el)=>{
        return (
            <div className='d'>
                <h2>{el.title}</h2>
                <p>{el.body}</p>
            </div>
        )
    })
    return (
        <div style={{
            background: theme === 'dark' ? '#000' : '#fff'
        }}>
            <button onClick={handleClick}>Change Theme</button>
            {res}
        </div>
    )
}
export {Products2}
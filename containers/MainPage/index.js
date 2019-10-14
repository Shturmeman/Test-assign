import React, { useState, useEffect } from 'react'
import "./main.css"
import test from './test.json'


const MainPage = () => {
    const [data, setdata] = useState([])
    const [selected, setselected] = useState([])
    useEffect(() => {
        setdata(test)
    }, [])

    const selector = id => {
        if (selected.includes(id)) {
            setselected([...selected.filter(elem => elem !== id)])
        }
        else {
            setselected([...selected, id])
        }
    }
    return (
        <main>
            <section className="cards">
                {data.map(elem => <div onClick={() => selector(elem.id)} className={selected.includes(elem.id) ? "activeCard" : "card"} key={elem.id} >
                    <h2>{elem.name}</h2>
                    <img src={elem.url} alt="avatar" />
                </div>)}

            </section>
            <button onClick={() => alert(selected)}>Submit</button>
        </main>

    )

}

export default MainPage
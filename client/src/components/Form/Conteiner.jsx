import React from "react"

const Conteiner = (props) => {
    return (
        <>
            <ul className="conteiner">                
                 {props.items.map((item) => (
                    <li className="item" key ={item.id}>
                        <label>{item.item}</label>
                        <button className="button" onClick={() => props.handleDelete(item.id)}>x</button>
                    </li>
                ))} 
            </ul>
        </>
    )
}

export default Conteiner
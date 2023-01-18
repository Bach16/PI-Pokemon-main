import React from "react"
import Types from "./Types"
import { Link } from "react-router-dom"
import "./Card.css"



const Card = ({id,name,image,types}) => {
    let contador = 1
    return (
        <div className="Card">
            <Link to={`/pokemon/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <h2>{name}</h2>
                <img src={image} alt="imagen" className="imagen"/> 
                    <div className="typesConteiner">
                    {
                    types.map(e => { return (
                            <Types 
                            name = {e.name ? e.name : e}
                            key = {contador++}
                            />
                            )
                        })
                    }
                    </div>  
            </Link>        
        </div>
    )
}

export default Card
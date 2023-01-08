import "./landing.css"
import React from "react"
import { Link } from "react-router-dom"


const Landing = () => {
    
    return (
        <>
            <Link to="/home"  style={{ color: 'inherit', textDecoration: 'inherit'}}>           
        <div className="landing"> 
                <button className="boton">Proyecto Individual</button>       
        </div>
            </Link>     
        </>
    )
}

export default Landing
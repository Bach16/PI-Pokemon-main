import React from "react"
import { Link } from "react-router-dom"
//import "./NavBar.css"

const NavBar = () => {
    return (
        <>
        <div className="NavBar">
            <h1><Link to="/home" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link></h1>            
            <h1><Link to="/create" style={{ color: 'inherit', textDecoration: 'inherit'}}>Create</Link></h1>
        </div>
        </>
    )
}

export default NavBar
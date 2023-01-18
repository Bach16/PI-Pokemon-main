import React, { useEffect, useState } from "react"
import { connect } from "react-redux"




const NewTypeInput = (props) => {

    return (
        <form className="addType" onSubmit={(e) => handleAddSubmit(e)}>
            <label className="label" htmlFor="Types">Types</label>
                <select className="TypeInput" type="text" name='Types' value={newType} onChange={(e) => setNewType(e.target.value)}>
                <option className="Type" value={null} key = {null}>Add Type</option> 
                    {Types.length ? Types.map(e => {
                        return <option className="Type" value={e.nombre} key = {e.id}>{e.nombre}</option> 
                    }): null }         
                </select>
                <button className="boton" type="submit" aria-label="Add Type">Add</button>
        </form>
    )
}


export default NewTypeInput
import React from "react"
import { useSelector } from "react-redux"

const TypeInput = ({newType,setNewType,handleAddSubmit}) => {
    
    const types = useSelector(state=>state.types)
    return (
        <>
            <form className="addType" onSubmit={(e) => handleAddSubmit(e)}>
                <label className="label" htmlFor="Types">Types</label>
                <select className="TypeInput" type="text" name='Types' value={newType} onChange={(e) => setNewType(e.target.value)}>
                <option className="Type" value={null} key = {null}>Add Type</option> 
                    {types.length ? types.map(e => { 
                        return <option className="Type" value={e.name} key = {e.id}>{e.name}</option> 
                    }): null }         
                </select>
                <button className="boton" type="submit" aria-label="Add Type">Add</button>
            </form>       
        </>
    )
}

export default TypeInput
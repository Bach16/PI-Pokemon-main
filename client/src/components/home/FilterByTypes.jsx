import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {getTypes,filtering,filtered} from "../../redux/actions"
import {useEffect, useState} from "react";


const FilterByTypes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(getTypes())

    }, []) 
    const types = useSelector(state => state.types)
    const [filter,setFilter] = useState({
        types: ""
    })
    const filtros = useSelector(state => state.filters)
    const pokemons = useSelector(state => state.pokemons)
    const [typesToDispatch,settypesToDispatch] = useState({
        types: filtros
    })


     


    const onChange = (e) => {
        setFilter({[e.target.name]:e.target.value})
        if (e.target.name)
        settypesToDispatch({[e.target.name]:[...typesToDispatch.types,e.target.value]})
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!filter.types) return
        dispatch(filtering(filter.types))
        dispatch(filtered(typesToDispatch.types,pokemons))
        setFilter({
            types: ""
        })        
    }
  return (
    <form className="addtypes" onSubmit={(e) => handleSubmit(e)}>
            <label className="label" htmlFor="Types">Filter</label>
            <select className="typeInput" type="text" name='types' value={filter.types} onChange={onChange}>
                <option className="type" value={null} key ={null} >Types</option> 
                    {types.length ? types.map(e => {
                        return <option className="type" value={e.name} key = {e.id}>{e.name}</option> 
                    }): null }         
                </select>
                <button className="boton" type="submit" aria-label="Add Diet">filter</button>
    </form>     
  );
}
export default FilterByTypes
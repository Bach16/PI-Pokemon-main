import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {getTypes,filtering,filtered} from "../../redux/actions"
import {useEffect, useState} from "react";


const FilterByTypes = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const filtros = useSelector(state => state.filters)
    const filtrados = useSelector(state => state.filtered) 


    useEffect(() => {
       if(!types.length)dispatch(getTypes())
    }, [dispatch,types.length]) 

    const [filter,setFilter] = useState({
        types: ""
    })
    const [typesToDispatch,setTypesToDispatch] = useState({
        types: filtros
    })

    useEffect(()=>{
        if(!filtros.length) {
            setTypesToDispatch({
                types:[]
            })
        }
    },[filtros])



    const onChange = (e) => {
        setFilter({[e.target.name]:e.target.value})
        if (e.target.name)
        setTypesToDispatch({[e.target.name]:[...typesToDispatch.types,e.target.value]})
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!filter.types) return
        if(filtros.includes(filter.types)) return
        dispatch(filtering(filter.types))
        if (typesToDispatch.types.length < 3)dispatch(filtered(typesToDispatch.types,filtrados))
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
import React from "react"
import { useDispatch } from "react-redux"
import {searchPokemon,ResetFilters,Reset} from "../../redux/actions"
import { useState} from "react";
import "./SearchByName.css"


const SearchByName = ({placeholder}) => {
    const dispatch = useDispatch()
    const [input,setInput] = useState({
        search: ""        
    })
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        }) 
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setInput({
            search: ""
        })
        dispatch(ResetFilters())
        dispatch(Reset())
        dispatch(searchPokemon(input.search))
    }

    return (
        <>
        <div className="SearchByName">
            <form onSubmit={handleSubmit}>
                <button 
                    className="submit" 
                    type="submit">
                        Search
                </button>
                <input type="text" name="search" placeholder={placeholder} onChange={onChange} value={input.search}></input>
            </form>          
        </div>
        </>
    )
}

export default SearchByName
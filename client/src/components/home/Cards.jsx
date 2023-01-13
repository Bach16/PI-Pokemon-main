import React from "react"
import Card from "./Card"
import PokemonNotFound from "./PokemonNotFound"
import {filtered} from "../../redux/actions"

import {useSelector, useDispatch} from "react-redux"
import {useEffect, useState} from "react";



const Cards = (props) => {
    const dispatch = useDispatch()
    const filtrados = useSelector(state => state.filtered) 
    const filtros = useSelector(state => state.filters)

    useEffect(() => {
        if(filtros)dispatch(filtered(filtros, props.pokemons)) 
     }, []) 
    if ( !filtrados.length && filtros.length ) {
        return (
            <PokemonNotFound/>          
        )
    }else if(!filtrados.length) {
        return(
            <div className="cards">
                {
                    props.pokemons.map(e => {
                        return <Card
                            key= {e.id}
                            id={e.id}
                            name= {e.name}
                            image = {e.image}
                            types = {e.types}
                            />
                        }
                    )
                }
            </div>
        )
    } else {
        return (
            <div className="cards">
                {                    
                    filtrados.map(e => {
                        return <Card
                            key= {e.id}
                            id={e.id}
                            name= {e.name}
                            image = {e.image}
                            types = {e.types}
                            />
                        }
                    )
                    
                }   
            </div>            
        ) 
    }
    
    
}

export default Cards
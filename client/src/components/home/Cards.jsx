import React from "react"
import Card from "./Card"
import PokemonNotFound from "./PokemonNotFound"
import {filtered} from "../../redux/actions"
import "./Cards.css"
import {useSelector, useDispatch} from "react-redux"
import {useEffect, useState} from "react";
import Pagination from "./Pagination"



const Cards = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons) 
    const filters = useSelector(state => state.filters)
    const filtrados = useSelector(state => state.filtered)
    const sort = useSelector(state=>state.sort)
    
    useEffect(()=>{
        if(!filtrados.length)dispatch(filtered(null,pokemons))
    },[dispatch,pokemons])

//-------------------pagination---------------------------------------------
    const [page,setPage] = useState(1)
    const [perPage,setPerPage] = useState(12)

    
    
    const max = Math.ceil(filtrados.length / perPage)

    const lastCardIndex = page * perPage;
    const firstCardIndex = lastCardIndex - perPage
    const currentCard = sort.length ? sort.slice(firstCardIndex,lastCardIndex):filtrados.slice(firstCardIndex,lastCardIndex) 
//--------------------------------------------------------------
//-----------------------------------------------------------------
   
    
    if ( !filtrados.length && filters.length ) {
        return (
            <PokemonNotFound/>          
        )
    }else {
        return(
            <>
            <Pagination page={page} setPage={setPage} max={max}/>

            
            <div className="cards">
                
                {
                    currentCard.map(e => {
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

            </>
        )
    }     
    
}

export default Cards
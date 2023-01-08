import React from "react"
import Card from "./Card"
import {connect} from "react-redux"
import {getPokemons} from "../../redux/actions"
import {useEffect} from "react";
import Loading from "./loading"



const Cards = (props) => {
    return (
        <>
        <div className="cards">
            {
                props.pokemons.map(e => {
                return <Card
                    key= {e.id}
                    id={e.id}
                    name= {e.name}
                    image = {e.image}
                    types = {e.types}
                    />}
                )
            }   
        </div>
        </>
    )
    
}

export default Cards
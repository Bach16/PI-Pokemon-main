import React from "react"
import NavBar from "./navbar"
import {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux"
import {getPokemon,ResetPokemon} from "../redux/actions"
import Loading from "./home/loading"




const Details = (props) => {
    let counter = 0
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(ResetPokemon())
        dispatch(getPokemon(props.match.params.id))       
    },[dispatch,props.match.params.id])
    const pokemon = useSelector(state=>state.pokemon)
    console.log(pokemon.age);
    if (pokemon.name) {
        return (
            <>
            <div className="Details">
                <NavBar/>
                <div className="DetailCard" key={pokemon.id}>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.image} alt="" />
                    <h3>Attack: {pokemon.attack}</h3>
                    <h3>Defense: {pokemon.defense}</h3>
                    <h3>Height: {pokemon.height}</h3>
                    <h3>Hp: {pokemon.hp}</h3>
                    <h3>Speed: {pokemon.speed}</h3>
                    <h3>Weight: {pokemon.weight}</h3>
                    <h3>age: {pokemon.age       }</h3>
                    <h3>Types:</h3>
                    {pokemon.types.map(t=>{
                        counter++
                        return<h3 key={counter}>{t.name ? t.name : t}</h3>
                    })}
    
                </div>                  
            </div>
            </>
        )
    }else {
        return (
            <Loading/>
        )
    }
    
}

export default Details
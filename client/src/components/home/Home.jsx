import React from "react"
import Cards from "./Cards"
import NavBar from "../navbar"
import {connect} from "react-redux"
import {getPokemons} from "../../redux/actions"
import {useEffect} from "react";
import Loading from "./loading"
import SearchBar from "./SearchBar"


const Home = (props) => {
    useEffect(() => {
        if(!props.pokemons.length) props.getPokemons()
    }, []) 

    if (props.pokemons.length) {
        return (
           <>
           <div className="home">
               <NavBar/>
               <SearchBar/>
               <Cards pokemons = {props.pokemons}/>                        
           </div>
           </>
       )
    } else {
        return (
            <Loading/>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        pokemons: state.pokemons,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getPokemons:() => dispatch(getPokemons()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON"
export const POST_POKEMON = "POST_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const SEARCH_POKEMON = "SEARCH_POKEMON"
export const ERROR = "ERROR"
export const RESET = "RESET"
export const FILTER = "FILTER"
export const FILTERED = "FILTERED"
let aux = []
let filtrados = []




export const getPokemons = (name) => {
    return function(dispatch){
        try {               
            axios.get(`http://localhost:3001/pokemons`)
            .then((response) => dispatch({type:GET_POKEMONS, payload: response.data}))                     
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const searchPokemon = (name) => {
    return function(dispatch){
        try {   
            if (name) {
            axios.get(`http://localhost:3001/pokemons/?name=${name}`)
            .then((response) => dispatch({type:SEARCH_POKEMON, payload: response.data}))
            } else {
                throw new Error("Missing name")
            }         
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}


export const getPokemon = (id) => {
    return function(dispatch){
        try {            
            axios.get(`http://localhost:3001/pokemons/${id}`)
            .then((response) => dispatch({type:GET_POKEMON, payload: response.data}))
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const Reset = () => {
    return function(dispatch){
        try {            
            dispatch({type:RESET, payload:[] })
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const postPokemon = (pokemon) => {
    return async function (dispatch){
        try {
         axios.post("http://localhost:3001/pokemons",pokemon)
         .then(console.log("ajas"))
         dispatch({
            type: POST_POKEMON, payload: "response.data"
         })
        } catch (error) {
            console.log(error);
            dispatch({type:ERROR, payload: error})   
        }
    }
}

export const getTypes = () => {
    return function(dispatch){
        try {            
            axios.get("http://localhost:3001/types")
            .then((response) => dispatch({type:GET_TYPES, payload: response.data}))
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const filtering = (fil) => {

    return function(dispatch){
        try {            
            dispatch({type:FILTER, payload:fil })
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const filtered = (fil,pokemons) => {
    return function(dispatch){
        try {
             if(fil.length === 1) aux= pokemons
                for (let i = 0; i < fil.length; i++) {
                    filtrados = []
                   filtrados.push(aux.filter(e => e.types.includes(fil[i].toString())))
                   aux = filtrados.flat() 
                }            
            dispatch({type:FILTERED, payload:filtrados.flat() })
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
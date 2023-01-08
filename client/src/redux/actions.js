import axios from "axios";
export const GET_POKEMONS = "GET_RECIPES";
export const GET_POKEMON = "GET_RECIPE"
export const POST_POKEMON = "POST_RECIPE"
export const GET_TYPES = "GET_DIETS"
export const ERROR = "ERROR"



export const getPokemons = () => {
    return function(dispatch){
        try {            
            axios.get("http://localhost:3001/pokemons")
            .then((response) => dispatch({type:GET_POKEMONS, payload: response.data}))
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

export const postPokemon = (recipe) => {
    return async function (dispatch){
        try {
         const response = await axios.post("http://localhost:3001/pokemons", recipe)
         dispatch({
            type: POST_POKEMON, payload: response.data
         })
        } catch (error) {
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
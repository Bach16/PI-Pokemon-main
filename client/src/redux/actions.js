import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON"
export const POST_POKEMON = "POST_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const ERROR = "ERROR"


const obj = {
	"name": "jojsaddos",
	"health" : 305,
	"attack" : 527,
	"defense" : 8,
	"speed" : 55,
	"height" : 584,
	"weight":54,
	"types" : [
			"4",
			"3"
		]
}
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

export const postPokemon = (pokemon) => {
    console.log(pokemon);
    return async function (dispatch){
        try {
         axios.post("http://localhost:3001/pokemons",obj)
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
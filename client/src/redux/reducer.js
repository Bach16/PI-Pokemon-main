import { GET_POKEMON, GET_POKEMONS, POST_POKEMON, ERROR, GET_TYPES } from "./actions"

const initialState = {
    pokemons: [],
    error: {},
    pokemon: {},
    post: {},
    types: []
}

const rootReducer =(state=initialState,action) =>{
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        case GET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }    
        case POST_POKEMON: 
            return {
                ...state,
                post: action.payload
            }  
        case GET_TYPES:             
            return {
                ...state,
                types: action.payload
            }    
        default:
            return {...state}
    }
}

export default rootReducer
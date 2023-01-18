import { GET_POKEMON, GET_POKEMONS,RESET_SORT,SORT_BY_AZ, POST_POKEMON,SORT, ERROR,RESET_FILTERS, GET_TYPES,RESET_POKEMON, SEARCH_POKEMON,RESET,FILTERED, FILTER} from "./actions"

const initialState = {
    pokemons: [],
    error: {},
    pokemon: {},
    post: {},
    types: [],
    filtered:[],
    filters:[],
    sort:[]
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
        case SEARCH_POKEMON:             
            return {
                ...state,
                pokemons: action.payload
            }  
        case RESET:             
            return {
                ...state,
                filtered: action.payload
            }  
        case FILTERED:
            return{
                ...state,
                filtered:action.payload
            }
        case FILTER:
            return{
                ...state,
                filters:[...state.filters,action.payload] 
            }
        case RESET_FILTERS:
            return {
                ...state,
                filters: action.payload,
            } 
        case RESET_POKEMON:
            return {
                ...state,
                pokemon: action.payload
            }
        case SORT:
            return {
                ...state,
                filtered: action.payload
            }
        case SORT_BY_AZ:
            return {
                ...state,
                sort: action.payload
            }
        case RESET_SORT:
            return {
                ...state,
                sort: action.payload
            }
        default:
            return {...state}
    }
}

export default rootReducer
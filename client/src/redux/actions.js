import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON = "GET_POKEMON"
export const POST_POKEMON = "POST_POKEMONS"
export const GET_TYPES = "GET_TYPES"
export const SEARCH_POKEMON = "SEARCH_POKEMON"
export const ERROR = "ERROR"
export const RESET = "RESET"
export const RESET_FILTERS = "RESET_FILTERS"
export const FILTER = "FILTER"
export const FILTERED = "FILTERED"
export const RESET_POKEMON = "RESET_POKEMON"
export const SORT = "SORT"
export const SORT_BY_AZ = "SORT_BY_AZ"
export const RESET_SORT = "RESET_SORT"




let aux = []
let filtrados = []
let sorted = []




export const getPokemons = () => {
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
            .then((response) => {
                if(response.data[0]) {
                    console.log(response.data);
                    dispatch({type:GET_POKEMON, payload: response.data[0]})
                } else {
                    console.log(response.data);
                    dispatch({type:GET_POKEMON, payload: response.data})
                }})            
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
export const ResetFilters = () => {
    return function(dispatch){
        try {            
            dispatch({type:RESET_FILTERS, payload:[] })
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const ResetSort = () => {
    return function(dispatch){
        try {            
            dispatch({type:RESET_SORT, payload:[] })
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
export const ResetPokemon = () => {
    return function(dispatch){
        try {            
            dispatch({type:RESET_POKEMON, payload:{}})
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const postPokemon = (pokemon) => {
    return async function (dispatch){
        try {
         const response = await axios.post("http://localhost:3001/pokemons",pokemon)
         
         dispatch({
            type: POST_POKEMON, payload: response.data
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
            if(!fil) {
                dispatch({type:FILTERED, payload:pokemons})
                return
            }  
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

export const sort = (pokemons,boolean) => {  
    console.log(boolean);
    return function(dispatch){
        try {
            if (boolean === "All"){
                dispatch({type:SORT, payload:pokemons})
            }
            if (boolean === "true") {
                sorted = pokemons.filter(e => e.id < 2000) 
                dispatch({type:SORT, payload:sorted })    
            } 
            if (boolean === "false") {
                sorted = (pokemons.filter(e => isNaN(e.id)))   
                dispatch({type:SORT, payload:sorted })    
            }
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}

export const sortByAz = (pokemons,boolean) => {  
    return function(dispatch){
        try {
            let res = pokemons.sort((a,b)=>{
                if(a.name < b.name) return -1
                else if (a.name < b.name) return 1
                else return 0
            })
            if(boolean === "true" ) {
                dispatch({type:SORT_BY_AZ, payload:res}) 
            }    
            if (boolean === "false") {
                dispatch({type:SORT_BY_AZ, payload:res.reverse()})                
            }  
             
        } catch (error) {
            dispatch({type:ERROR, payload: error})
        }
    }
}
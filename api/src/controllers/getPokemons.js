const axios = require("axios");

async function getUrl (url) {
    const apiResponse = await axios.get(url,{ 
        headers: { "Accept-Encoding": "gzip,deflate,compress" } 
    })
    return apiResponse
}

async function getPokemons (url="https://pokeapi.co/api/v2/pokemon") {
    let current = await getUrl(url)
    let array = []
    do {            
        array.push(current.data.results)
        current = await getUrl(current.data.next)
    } while (array.length < 2); 
    const arrayUrls = array.flat()
    const newArray = []
    for (let i = 0; i < arrayUrls.length; i++) {
        let dataApi = await getUrl(arrayUrls[i].url)
        newArray.push(dataApi.data)                
    }
    return newArray

}
async function allPokemons () {
    const array = await getPokemons()       
    const response = array.map((pokemon) => {
        return {
           id : pokemon.id,
           name: pokemon.name,
           image: pokemon.sprites.front_default,
           types: pokemon.types.map( e => {
               return e.type.name 
           })
        }
    })
    return response
}

const getPokemonsToFilter = async(url="https://pokeapi.co/api/v2/pokemon")=>{
    const newArray = await getPokemons()
    const response = newArray.map((pokemon) => {
        return {
            id : pokemon.id,
            name: pokemon.name,
            hp: pokemon.stats[0].base_stat,
            attack : pokemon.stats[1].base_stat,
            defense : pokemon.stats[2].base_stat,
            speed : pokemon.stats[5].base_stat,
            height : pokemon.height,
            weight : pokemon.weight,
            image: pokemon.sprites.front_default,
            types: pokemon.types.map( e => {
                return e.type.name 
            })
        }
     })
     return response 
}

const getPokemonByID = async(id) => {
    const apiData = await getPokemonsToFilter()
    const response = apiData.filter((pokemon) => pokemon.id == id)
    if (response) return response   
    else throw new Error("Pokemon not found") 
}

const getPokemonByName = async(name) => {
    const apiData = await getPokemonsToFilter()
    const response = apiData.filter((pokemon) => pokemon.name == name)
    if (response) return response   
    else throw new Error("Pokemon not found")
}

module.exports = {
    getUrl,
    allPokemons,    
    getPokemonByID,
    getPokemonByName
};

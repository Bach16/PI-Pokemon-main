const { Pokemon,Type } = require("../db")

const dbPokemons = async() => {
    const data = await Pokemon.findAll({
        include:{model: Type}
    })
    const db = data.map((pokemon) =>{
        return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.image,
            types: pokemon.types.map( e => {
                return e.name 
            })            
        } 
    })
    return db
}
const dbPokemonByName = async(name) => {
    const pokemon = await Pokemon.findAll({
        where:{name},
        include:{model: Type}
    })
    return pokemon
}

const dbPokemonById = async(id) => {
    const data = await Pokemon.findByPk(id,{
        include:{model: Type}
    })
   ;
    return data
}

module.exports = {
    dbPokemonById,
    dbPokemons,
    dbPokemonByName
};
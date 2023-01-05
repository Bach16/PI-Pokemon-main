const axios = require("axios")
const {Type} = require("../db")
const {getUrl} = require("../controllers/getPokemons")

const getTypes = async() => {
    try {   
        const types = await getUrl("https://pokeapi.co/api/v2/type")
        const newType =[]
        newArray = types.data.results.map(e=>getUrl(e.url))
        Promise.all(newArray)
        .then(async(responses)=>{
            responses.forEach(async (response) => {
                newType.push({name:response.data.name, id:response.data.id})
            });
            await Type.bulkCreate(newType)
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports = getTypes;
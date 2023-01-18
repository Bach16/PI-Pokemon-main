const express = require('express');
const { Pokemon,Type } = require("../db")
const axios = require("axios");
const {dbPokemonById,dbPokemons,dbPokemonByName} = require("../helpers/getPokemons")
const {allPokemons,getPokemonByID,getPokemonByName} = require('../controllers/getPokemons.js');


const pokemonRouter = express.Router()
pokemonRouter.get("/", async (req,res,next) => {
    try {
        const {name} = req.query
        if (Object.keys(req.query).length) {
            if (name) {
                const pokemonDb = await dbPokemonByName(name)
                const pokemonApi = await getPokemonByName(name)
                const response = [...pokemonApi,...pokemonDb]
                if(response.length)  res.status(200).send(response)
                else throw new Error("Pokemon not found")
            }
            else{
                throw new Error("Pokemon not found")
            } 
        } else next()
    }catch (error) {
        res.status(400).send({error:error.message})
    }
})

pokemonRouter.get("/", async (req,res) => {
    try {
        if(!Object.keys(req.query).length){
            const db = await dbPokemons()
            const responseApi = await allPokemons()
            const response = [...responseApi,...db]
            res.status(200).send(response)               
        }         
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}) 


pokemonRouter.get("/:id", async (req,res) => {
    try {
        const {id} = req.params
        if(id.length > 10) {
            const response = await dbPokemonById(id)
            if (response) res.status(200).send(response)
            else throw new Error("Pokemon not found")
        } else {
            const response = await getPokemonByID(id)
            if (response) res.status(200).send(response)
            else throw new Error("Pokemon not found")
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}) 

pokemonRouter.post("/",async (req,res) => {
    try {
        const {name,types}  = req.body
        console.log(req.body);
        if (!name||!types){
            return res.status(404).send("Missing data");
        } else {
            const newPokemon = await Pokemon.create(req.body);
            await newPokemon.addTypes(types)
            res.status(200).send(newPokemon)
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }
})


module.exports = pokemonRouter;
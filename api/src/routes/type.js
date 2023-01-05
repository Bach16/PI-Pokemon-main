const express = require('express');
const { Pokemon,Type } = require("../db")
const axios = require("axios")
const getTypes = require("../helpers/getTypes")

const typeRouter = express.Router()

typeRouter.get("/", async (req,res) => {
    try {
        const diets = await Type.findAll()
        res.status(200).send(diets)
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 


module.exports = typeRouter;
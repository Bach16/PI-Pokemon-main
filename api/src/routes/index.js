const { Router } = require('express');
const pokemonRouter = require("./pokemon")
const typeRouter = require("./type")
const validator = require("../validators/validators");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/pokemons",validator, pokemonRouter)
router.use("/types", typeRouter)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;

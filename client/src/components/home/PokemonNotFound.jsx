import React from "react"
import "./pokemonNotFound.css"


const PokemonNotFound = () => {
  return (
    <div className="PokemonNotFound">
      <h3>Filters didn't match any results</h3>
      <img src="https://i.giphy.com/media/RVUqo9viHge46R1exb/giphy.webp" alt="not found img" />
    </div>
  );
}
export default PokemonNotFound
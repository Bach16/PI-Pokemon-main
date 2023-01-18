import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {getPokemons,ResetFilters,Reset,ResetSort} from "../../redux/actions"
import "./ResetButton.css"



const ResetButton = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state=>state.pokemons)
    const filtereds = useSelector(state=>state.filtered)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getPokemons())
        dispatch(ResetFilters())
        dispatch(ResetSort())
        dispatch(Reset())
    }

  return (
    <div className="ResetButton">
        <button onClick={(e)=>handleSubmit(e)}>Reset</button>
    </div>    
  );
}
export default ResetButton
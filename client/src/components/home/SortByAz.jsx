import React, { useEffect } from "react"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {sortByAz,ResetSort} from "../../redux/actions"


const SortByAz = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    const filtered = useSelector(state => state.filtered)
    const onChange = (e) => {
        dispatch(ResetSort())
       dispatch(sortByAz(pokemons, e.target.value))
    }

  return (
        <form className="SortByAz">
            <select className="typeInput" type="text" name='types' onChange={onChange}>
                <option className="type" value="no" key ="1"/> 
                <option className="type" value={true} key = "2">A-Z</option> 
                <option className="type" value={false} key = "3">Z-A</option>               
            </select>
        </form>  
  );
}
export default SortByAz
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {sort,getPokemons} from "../../redux/actions"


const Sort = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector(state => state.pokemons)
    const filtered = useSelector(state => state.filtered)

    const onChange = (e) => {
        dispatch(sort(pokemons,e.target.value))
    }

  return (
    <div className="Sort">
        <form className="addtypes">
            <select className="typeInput" type="text" name='types' onChange={onChange}>
                <option className="type" value="All" key ="1">All</option> 
                <option className="type" value={false} key = "2">Database</option> 
                <option className="type" value={true} key = "3">Api</option>               
            </select>
        </form>  
    </div>     
  );
}
export default Sort
import React from "react"
import { useState } from "react";

const Pagination = ({page,setPage,max}) => {
    const [input,setinput] = useState(1)
    const nextPage = ()=>{
        setinput(parseInt(input)+1)
        setPage(parseInt(page)+1)
    }
    const prevPage = ()=>{
        setinput(parseInt(input)-1)
        setPage(parseInt(page)-1)
    }


  return (
    <div className="Pagination">
        <button disabled={page <= 1 } onClick={prevPage}>{"<"}</button>
        <p>{input} of {max}</p>
        <button disabled={page >= max} onClick={nextPage}>{">"}</button>
    </div>    
  );
}
export default Pagination
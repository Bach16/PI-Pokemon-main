import React from "react"
import SearchByName from "./SearchByName"
import FilterByTypes from "./FilterByTypes"


const SearchBar = () => {
    return (
        <>
        <div className="SearchBar">            
            <SearchByName placeholder="Search"/>
            <FilterByTypes/>           
        </div>
        </>
    )
}

export default SearchBar
import React from "react"
import SearchByName from "./SearchByName"
import FilterByTypes from "./FilterByTypes"
import ResetButton from "./ResetButton"
import Sort from "./Sort"
import SortByAz from "./SortByAz"
import "./SearchBar.css"



const SearchBar = () => {
    return (
        <div className="SearchBar">
            <ResetButton/>            
            <SearchByName placeholder="Search"/>
            <FilterByTypes/>      
            <Sort/>   
            <SortByAz/>  
        </div>
    )
}

export default SearchBar
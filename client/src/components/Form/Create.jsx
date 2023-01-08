import NavBar from "../navbar"
import Form from "./Form"
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import {getTypes, postPokemon } from "../../redux/actions"



const Create = (props) => {
    useEffect(() => {
        if(!props.types.length) props.getTypes()
    },[])

    return (
        <>
        <div className="Create">
            <NavBar/>
            <Form
            types={props.types}
            postPokemon={props.postPokemon}
            />            
        </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        post: state.post,
        types: state.types
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        postPokemon:() => dispatch(postPokemon()),
        getTypes:() => dispatch(getTypes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Create)
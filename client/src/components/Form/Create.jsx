import NavBar from "../navbar"
import Form from "./Form"
import React, { useEffect} from "react"
import { connect } from "react-redux"
import {getTypes} from "../../redux/actions"



const Create = (props) => {
    useEffect(() => {
        if(!props.types.length) props.getTypes()
    },[props])

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
        types: state.types
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getTypes:() => dispatch(getTypes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Create)
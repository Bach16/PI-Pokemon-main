import React from "react"
import FormInput from "./FormInput"
import {useState} from "react"
import { connect } from "react-redux"
import { postPokemon } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"



const Form = (props) => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)

    const [input,setInput] = useState({
        name: "",
        health: "",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:""
    })
    const inputs = [
        {
            id:1,
            name:"name",
            type:"text",
            placeholder:"Name",
            label:"Name",
        },
        {
            id:2,
            name:"health",
            type:"number",
            placeholder:"Health",
            label:"Health",
        },
        {
            id:3,
            name:"attack",
            type:"number",
            placeholder:"Attack",
            label:"Attack",
        },
        {
            id:4,
            name:"defense",
            type:"number",
            placeholder:"Defense",
            label:"Defense",
        },
        {
            id:5,
            name:"speed",
            type:"number",
            placeholder:"Speed",
            label:"Speed",
        },
        {
            id:6,
            name:"height",
            type:"number",
            placeholder:"Height",
            label:"Height",
        },        
        {
            id:7,
            name:"weight",
            type:"number",
            placeholder:"Weight",
            label:"Weight",
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postPokemon(input))
    }
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    return (
        <>
        <div className="Form">
            <h1>Create recipe</h1>
            <form onSubmit={handleSubmit}>
                <button 
                className="submit" 
                type="submit" 
                //disabled={!input.name}
                >
                Create</button>
                {inputs.map((i) => (
                    <FormInput
                    key={i.id} 
                    {...i} 
                    value={input[i.name]} 
                    onChange={(e) => onChange(e)}/>
                ))}
            </form>
        </div>
        </>
    )
}


export default (Form)
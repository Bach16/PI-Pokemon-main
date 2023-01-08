import React from "react"
import FormInput from "./FormInput"


const Form = ({types, postPokemon}) => {
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
            name:"Weight",
            type:"number",
            placeholder:"Weight",
            label:"Weight",
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("aja");
    }
    const onChange = () => {
        console.log("ajas 2");
    }
    return (
        <>
        <div className="Form">
            <h1>Create recipe</h1>
            <form onSubmit={handleSubmit}>
                <button 
                className="submit" 
                type="submit" 
                //disabled={!input.name||!input.health||!input.attack||!input.defense}
                >
                Create</button>
                {inputs.map((i) => (
                    <FormInput
                    key={i.id} 
                    {...i} 
                    //value={input[i.name]} 
                    onChange={onChange}/>
                ))}
            </form>
        </div>
        </>
    )
}

export default Form
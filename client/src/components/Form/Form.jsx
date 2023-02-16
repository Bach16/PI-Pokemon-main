import React from "react"
import FormInput from "./FormInput"
import {useState} from "react"
import { postPokemon } from "../../redux/actions"
import { useSelector, useDispatch } from "react-redux"
import TypeInput from "./TypeInput"
import Conteiner from "./Conteiner"
import { useEffect } from "react"
import Error from  "./Error"



const Form = () => {
    const dispatch = useDispatch()
    const types = useSelector(state=>state.types)
    const errors = useSelector(state => state.error)
    const validateForm = (input) => {
        const errors ={}
        if (!input.name ){
            errors.name = "the name is required"
        }else if (!input.hp) {
            errors.hp = "the hp is required"

        }else if (!input.attack) {
            errors.attack = "the attack is required"
        }else if (!input.defense) {
            errors.defense = "the defense is required"

        }else if (!input.speed) {
            errors.speed = "the speed is required"

        }else if (!input.height) {
            errors.height = "the height is required"

        }else if (!input.weight) {
            errors.weight = "the weight is required"

        }
        return errors
    }

    

    const [input,setInput] = useState({
        name: "",
        hp: "",
        attack:"",
        defense:"",
        speed:"",
        height:"",
        weight:"",
        age: "",
        types:[] 
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
            name:"hp",
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
        },
        {
            id:8,
            name:"age",
            type:"number",
            placeholder:"Age",
            label:"Age",
        },
    ]
    const [error, setError] = useState({})
    //------------------------------ Add Types ---------------------------------------------
    const [items, setItems] = useState([])
    const [newType, setNewType] = useState("")

    const addType = (item) => { 
        if (items.length > 1) return       
        if (items.find(e=>e.item === item)) return
        const id = items.length ? items[items.length - 1].id + 1 : 1
        const myNewItem = {id, item}
        const listItems = [...items,myNewItem]
        setItems(listItems)
    }
    useEffect(() => {
        for (let i = 0; i < items.length; i++) {
            types.map(e=> {
                if (e.name === items[i].item)
                setInput({
                    ...input,
                    types: [...input.types,e.id]
                })                 
                else return
            })
            
        }
    },[items,types])

    
    const handleAddSubmit = (e) => {
        e.preventDefault()        
        if(!newType) return;
        addType(newType)
        setNewType("")
        if (items.length > 2) return
        
    }
    
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id)
        setItems(listItems)
    }
    //----------------------------------------------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault() 
        if(input.name
           &&input.hp
           &&input.attack
           &&input.defense
           &&input.speed
           &&input.height
           &&input.weight
           &&input.types.length) {
               dispatch(postPokemon(input))
               alert("Pokemon created")
               setInput({
                   name: "",
                   hp: "",
                   attack:"",
                   defense:"",
                   speed:"",
                   height:"",
                   weight:"",
                   types:[] 
               })
            }
            else{
                dispatch(postPokemon(input))
            }
                 
    }
    
    const onChange = (e) => {        

        setInput({
            ...input,
            [e.target.name]:e.target.value            
        })         
        setError(validateForm(input))                              
    }
    if (errors.message) {
        return (
            <Error/>
        )
    }else {
        return (
        <>
        <div className="Form">
            <h1>Create recipe</h1>
            <form onSubmit={handleSubmit}>
                <button 
                className="submit" 
                type="submit" 
                disabled={!input.name
                    ||!input.hp
                    ||!input.attack
                    ||!input.defense
                    ||!input.speed
                    ||!input.height
                    
                    ||!input.types.length
                }
                >
                Create</button>
                {inputs.map((i) => (
                    <FormInput
                    key={i.id} 
                    {...i} 
                    value={input[i.name]} 
                    //errorMenssage = {error}
                    onChange={(e) => onChange(e)}/>
                ))}
            </form>
                <TypeInput newType={newType} setNewType={setNewType} handleAddSubmit={handleAddSubmit} /> 
                <Conteiner items={items} handleDelete={handleDelete} />
        </div>
        </>
    )
    }

    
}


export default (Form)
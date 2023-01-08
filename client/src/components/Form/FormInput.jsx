import React from "react"


const FormInput = (props) => {
    const{label,errorMensage,onChange,id, ...inputProps} = props

    return (
        <>
        <div className="formInput">
            <label className="label">{label}</label>
            <input {...inputProps} onChange={onChange} /> 
            <span>{errorMensage}</span>                   
        </div>         
        </>
    )
}

export default FormInput
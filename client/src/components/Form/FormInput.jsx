import React from "react"


const FormInput = (props) => {
    const{label,errorMenssage,onChange,id, ...inputProps} = props

    return (
        <>
        <div className="formInput">
            <label className="label">{label}</label>
            <input {...inputProps} onChange={onChange} />
          {/*  {errorMenssage.length? <span>{errorMenssage}</span> : null} */}                   
        </div>         
        </>
    )
}

export default FormInput
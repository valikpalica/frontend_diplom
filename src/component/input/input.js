import React from "react";
import classes from './input.module.css'

const Input = (props) =>{
    return(
        <div className={classes.centerElement} >
            
            <label className={classes.label}>{props.placeholder}</label>
            
            <input className={classes.Input} type='text' onChange={(event)=>{
                    props.getInfo({property: props.property,value:event.target.value});
            }}/>
        </div>
    )
}

export default Input
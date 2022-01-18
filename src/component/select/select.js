import React from "react";
import classes from './select.module.css'

const Select = (props) =>{
    return(
        <select className={classes.Select} onChange={props.CheckValue} value={props.defaultValue}>
            {props.array_option.map((item,index)=>{
                return (<option value={item.id_type_anceta} key={index}>
                    {item.type_anceta}
                </option>)
            })} 
        </select>
    )
}

export default Select
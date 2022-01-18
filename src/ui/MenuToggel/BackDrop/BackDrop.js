import React from "react";
import classes from './BackDrop.module.css'

const BackDrop = (props) =>{
    const cls = []
    if(props.isOpen){
        cls.push(classes.BackDrop);
    }
    return (
        <div className={cls.join(' ')} onClick={props.onCloseMenu}>
        </div>
    )
}
export default BackDrop;
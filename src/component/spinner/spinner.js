import React from "react";
import classes from './spinner.module.css'

const Spinner = () =>{
    return(
       <div className={classes.block}>
            <h1>Завантаження</h1>
            <div className={classes.Loader}></div>
       </div>
    )
}
export default Spinner

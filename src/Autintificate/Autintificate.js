import React from "react";
import classes from './Autintificate.module.css'
import { Outlet } from "react-router-dom";

const Autintificate = (props) =>{
    return(
        <div className = {classes.Atintificate}>
            <div className={classes.AntificateWrapper}>
                <Outlet/>
            </div>
        </div>
    )
}
export default Autintificate
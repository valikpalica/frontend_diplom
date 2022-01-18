import React from "react";
import Button from "../../component/button/button";
import classes from './PersonInfo.module.css'

const PersonInfo = (props) =>{
    return(
        <div className={classes.PersonalInfo}>
            <h1>Personal Info</h1>
            <Button onClick = {props.goBack}>
                Go Back
            </Button>
        </div>
    )
}

export default PersonInfo

import React from "react";
import { useNavigate } from "react-router-dom";

const FormAuth = (props) =>{
    const navigate = useNavigate();
    return(
        <form onSubmit={ async (e)=>{
            e.preventDefault();
            await props.onSub(navigate)
        }}>
            {props.children}
        </form>
    )
};

export default FormAuth
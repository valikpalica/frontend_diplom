import React from "react";
import { Navigate } from "react-router-dom";
const Exit  = () =>{
    localStorage.removeItem('authorization');
    return(
        <React.Fragment>
            <Navigate to='/'/>
        </React.Fragment>
    )
}

export default Exit
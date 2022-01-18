import React from 'react'
import { NavLink} from 'react-router-dom'
import classes from './Link.module.css'

const Links = (props) =>{
    return(
        <NavLink className={classes.Link} to={props.to} onClick={props.onClickLink}>
           {props.name}
        </NavLink>
    )
}

export default Links
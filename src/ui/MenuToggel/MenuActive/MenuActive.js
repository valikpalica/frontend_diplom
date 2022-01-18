import React from 'react'
import Links from './Link/Link'
import classes from './MenuActive.module.css'

const MenuActive = (props) =>{
       return(
        <ul className={classes.MenuActive}>
            {props.links.map((item,index)=>{
                return(
                    <li key={index}>
                        <Links name={item.name} to={item.link} onClickLink={props.onChangePage}/>
                    </li>
                )
            })}
        </ul>
    )
}
export default MenuActive
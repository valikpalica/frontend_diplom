import React from 'react'
import classes from './menu.module.css'

const ToggelMenu = (props) =>{
    const cls = [classes.Menu];

    if(props.isOpen){
        cls.push(classes.open)
    }
    return(
        <div className={cls.join(' ')} onClick={props.onClick}>
            <i className='fa fa-bars'></i>
        </div>
    )
}
export default ToggelMenu

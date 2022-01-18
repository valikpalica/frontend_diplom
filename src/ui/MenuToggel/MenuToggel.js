import React from 'react'
import BackDrop from './BackDrop/BackDrop'
import MenuActive from './MenuActive/MenuActive'
import classes from './MenuToggel.module.css'

const MenuToggel = (props) =>{
    const cls = [classes.MenuToggel]
    if(!props.isOpen){
        cls.push(classes.close)
    }
    return(
        <React.Fragment>
        <div className={cls.join(' ')}>
            <h1>Загальне меню</h1>
            <MenuActive {...props}/>
        </div>
        <BackDrop isOpen = {props.isOpen} onCloseMenu={props.onChangePage}/>
        </React.Fragment>
       
    )
}
export default MenuToggel
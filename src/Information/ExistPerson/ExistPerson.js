import React from "react";
import Button from "../../component/button/button";
import Input from "../../component/input/input";
import classes from './ExistPerson.module.css'

const ExistPerson = (props) =>{
    return(
        <div className={classes.ExistPerson}>
            <h1>Перевірка наявності офіцера</h1>
            <Input placeholder="Ім'я" property = 'name' getInfo = {props.auditPersonalinfo}/>
            <Input placeholder='Прізвище' property = 'surname' getInfo = {props.auditPersonalinfo}/>
            <Input placeholder='По-батькові' property = 'patronime' getInfo = {props.auditPersonalinfo}/>
            <Button onClick = {props.onClick}>Пошук</Button>
        </div>
    )
}
export default ExistPerson
import React from "react";
import Button from "../component/button/button";
import Input from "../component/input/input";
import classes from './Registration.module.css';
import Form from '../Form/Form'
import axios from "axios";

class Registration extends React.Component{

    state = {
        registration:{},
        to:'/'
    }
    RegInfo = (data) =>{
        let obj_reg = this.state.registration;
        obj_reg[data.property] = data.value
        this.setState({
            registration:obj_reg
        })
    }
    onRegistration = async (navigate) =>{
        try {
            console.log(this.state.registration)
            await axios.post('http://localhost:8000/autintificate/reg',this.state.registration);
            navigate(this.state.to);
        } catch (e) {
            console.log(e.response.data)
            return 
        }
    }
    render(){
        return(
            <Form onSub={this.onRegistration} to={this.state.to}>
                <div className={classes.Registration}>
                    <h1>Реєстрація у систему</h1>
                    <Input getInfo = {this.RegInfo} property = 'login' placeholder = 'Логін' />
                    <Input getInfo = {this.RegInfo} property = 'password' placeholder = 'Пароль'/>
                    <Button>Реєстрація</Button>
                </div>
            </Form>
        )
    }
}

export default Registration
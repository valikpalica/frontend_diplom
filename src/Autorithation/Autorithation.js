import React from 'react'
import Button from '../component/button/button'
import Input from '../component/input/input'
import classes from './Autorithation.module.css'
import Form from '../Form/Form'
import axios from 'axios'

class Autorithation extends React.Component{
    state = {
        auth:{},
        to:'/typeAnceta'
    }
    AuthInfo = (data) =>{
        let obj_auth = this.state.auth;
        obj_auth[data.property] = data.value;
        this.setState({
            auth:obj_auth
        })
    };
    CheckAuth = async (navigate) =>{
        try {
            let response = await axios.post('http://localhost:8080/auth/auth',this.state.auth);
            //console.log(response.data);
            localStorage.setItem('access_token',response.data.tokens.access_token);
            localStorage.setItem('refresh_token',response.data.tokens.refresh_token);
            this.props.onAuth();
            navigate(this.state.to);
        } catch (e) {
            console.log(e.response.data);
            return
        }
    }
    render(){
        return(
            <Form onSub={this.CheckAuth}>
                <div className={classes.Autorithation}>
                    <h1>Вхід в систему</h1>
                    <Input getInfo={
                        this.AuthInfo
                    } property = 'login' placeholder = 'Логін'/>
                    <Input getInfo={
                        this.AuthInfo
                    } property = 'password' placeholder = 'Пароль'/>
                    <Button>Вхід</Button>
                </div>
            </Form>
        )
    }
}

export default Autorithation